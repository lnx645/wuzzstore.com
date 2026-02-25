import LoginController from '@/actions/App/Http/Controllers/Account/Auth/LoginController';
import { useToast } from '@/stores/toast';
import { useForm } from '@inertiajs/vue3';

export const useAuthentication = () => {
    let form = useForm<{
        email: string;
        password: string;
    }>({
        email: '',
        password: '',
    });
    let toast = useToast();
    function processLogin() {
        toast.addToast('Memproses login...', 'Sedang memproses login Anda, harap tunggu. dengan ini kami menyatakan wkwkw', 'success', 90000);
        form.submit(LoginController.process());
    }
    return {
        form,
        processing: form.processing,
        errors: form.errors,
        processLogin,
    };
};
