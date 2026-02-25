// stores/toast.ts
import { reactive } from 'vue';

const toasts = reactive<Array<{ id: number; title: string; message: string; type: string }>>([]);

export const useToast = () => {
    function addToast(title: string, message: string, type = 'success', duration = 3000) {
        const id = Date.now();
        toasts.push({ id, title, message, type });

        if (toasts.length > 4) toasts.shift();

        setTimeout(() => removeToast(id), duration);
    }

    function removeToast(id: number) {
        const index = toasts.findIndex((t) => t.id === id);
        if (index !== -1) toasts.splice(index, 1);
    }

    return { toasts, addToast, removeToast };
};
