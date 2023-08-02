import {defineStore} from 'pinia'
import {ref} from 'vue'

export type Person = {
    name: string;
    age: string;
}

export const usePersonsStore = defineStore('persons', () => {
    const children = ref<Person[]>([])
    const parent = ref<Person>({name: '', age: ""})

    return {children, parent}
})
