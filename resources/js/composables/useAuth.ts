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
    function processLogin() {
        form.submit(LoginController.process());
    }
    return {
        form,
        processing: form.processing,
        errors: form.errors,
        processLogin,
    };
};
