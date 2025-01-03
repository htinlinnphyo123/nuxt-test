import { ref } from "vue";

const locale = ref('khr');

if (process.client) {
  const storedLocale = localStorage.getItem('locale');
  if (storedLocale) {
    locale.value = storedLocale;
  }
}

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