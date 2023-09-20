import {
    ref
} from 'vue'

export function useToggle() {

    let isHidden = ref(true);
    const toggle = () => {
        isHidden.value = !isHidden.value;
    }

    return {
        isHidden,
        toggle
    }

}