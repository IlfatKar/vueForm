import {defineStore} from 'pinia'
import {ref} from 'vue'
import {type Person} from "./persons";


export const useFormControllerStore = defineStore('FormController', () => {
    const children = ref<Person[]>([])
    const parent = ref<Person>({name: '', age: ""})
    const showError = ref<boolean>(false)
    const pushChildren = () => {
        children.value.push({name: '', age: ''})
    }

    const removeChildren = (idx: number) => {
        children.value.splice(idx, 1)
    }

    const clear = () => {
        parent.value = {name: '', age: ""}
        children.value = []
    }

    return {children, parent, pushChildren, removeChildren, showError, clear}
})
