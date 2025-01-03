import useLocaleManage from '@/composables/Locale/localeManage';

export default function fieldManager(field,OtherField) {
    const { locale } = useLocaleManage();
    return locale.value === 'khr' ? field : (OtherField || field || null);
}