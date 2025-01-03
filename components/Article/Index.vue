<template>
  <div> 
    <div id="article-container" class="mt-4 mb-20 md:mt-6">
      <Loader v-if="articleLoading === true" />
      <ListShow v-else :localizedArticles="localizedArticles" />
      <div
        class="py-4"
        ref="scrollLoadMore"
      > 
      <LoadMore
        v-if="loadMoreShow"
        @load-more-article="loadMoreArticle"
        :startLoading="loading"
        :noMoreArticle="noMoreArticle"
      />
      </div>
    </div>
  </div>
</template>

<script setup>
import useArticles from "@/composables/Article";
import { watch, ref, onMounted, onUnmounted } from "vue";
import Loader from "./Loader.vue";
import ListShow from "./ListShow.vue";
import LoadMore from "./LoadMore.vue";
const articleLoading = ref(false); //for Skeleton Article Card
const noMoreArticle = ref(false);
const loadMoreShow = ref(true);
let articleTimeOut = null;
const scrollLoadMore = ref(null);

const props = defineProps({
  categoryId: String,
  subcategoryId: String,
  type: String,
});

const emit = defineEmits(["articleNotFound"]);
let observer = null;
const nextPage = ref(2);
const { localizedArticles, error, fetchArticles, loading, lastPage } =
  useArticles();

//when user click Load More button , next 6 article is fetched
function loadMoreArticle() {
  //stop calling this function , if it is loading state or noMoreArticle
  if (loading.value || noMoreArticle.value) return;
  loading.value = true;

  setTimeout(async () => {
    await fetchArticles({
      category_id: props.categoryId,
      subcategory_id: props.subcategoryId,
      page: nextPage.value,
      type: props.type,
      resetArticle: false,
    });
    //if the last page and current page are equal, we will not call api , so we will do
    if (nextPage.value >= lastPage.value) {
      noMoreArticle.value = true;
    }
    nextPage.value++;
  }, 800);
}

const scrollFetchCallBack = (entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      // console.log(entry);
      loadMoreArticle();
    }
  });
};

//Scrol Intersection API
onMounted(() => {
  const options = {
    root:null,
    rootMargin: "-200px",
  };

  observer = new IntersectionObserver(scrollFetchCallBack, options);
  if(scrollLoadMore.value) observer.observe(scrollLoadMore.value)
});

function resetArticleState(){
    articleLoading.value = true;
    //reset page and noMoreArticleStatus to the original One
    noMoreArticle.value = false;
    loadMoreShow.value = true;
    nextPage.value = 2;
}

//watch for category and subcategory change
watch(
  [() => props.categoryId, () => props.subcategoryId, () => props.type],
  function () {

    resetArticleState();
    //remove the previous setTimeout if category or subcategory change and setTimeout is still not called.
    if (articleTimeOut) {
      clearTimeout(articleTimeOut);
    }
    articleTimeOut = setTimeout(async function () {
      await fetchArticles({
        category_id: props.categoryId,
        subcategory_id: props.subcategoryId,
        type: props.type,
      });
      if (localizedArticles.value.length === 0) {
        loadMoreShow.value = false;
        emit("articleNotFound");
      }
      articleLoading.value = false;
    }, 500);
  },
  { immediate: true }
);

onUnmounted(()=>{
    observer.disconnect();
    observer = null;
})

</script>
