import { ref } from "vue";

const locale = ref('khr');

function changeLocale(newLocale) {
  locale.value = newLocale;
  if (process.client) {
    localStorage.setItem('locale', newLocale);
  }
}

export default function localeManage() {
  return {
    locale,
    changeLocale
  };
}