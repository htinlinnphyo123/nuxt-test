import { useToast } from "primevue/usetoast";
export default defineNuxtPlugin((nuxtApp) => {
    const isOnline = useState("isOnline", () => true);
    const toast = useToast();
  
    // Set up online/offline listeners
    if (process.client) {
      window.addEventListener("offline", () => {
        isOnline.value = false;
        toast.add({
          severity: "warn",
          summary: "Oops!",
          detail: "You are currently Offline",
          life: 5000,
        });
      });
  
      window.addEventListener("online", () => {
        isOnline.value = true;
        toast.add({
          severity: "info",
          summary: "Welcome Back!",
          detail: "You are online now.",
          life: 5000,
        });
      });
    }
  });
  