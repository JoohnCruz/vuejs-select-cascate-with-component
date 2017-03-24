<template>
    <div>
        <h3>{{message}}</h3>
        <div>
            <cascate name="users" 
                address="https://api.github.com/users?page=1&per_page=2"
                objectValue="id" 
                objectName="login">
            </cascate>
            </hr>
            <cascate name="repositories" 
                address="https://api.github.com/users/joohncruz/repos?page=1&per_page=4" 
                parent="users" 
                objectValue="id" 
                objectName="name">
            </cascate>
        </div>
    </div>
</template>

<script>
    
    import cascate from './cascate.vue'

    export default {
        name: 'control',
        components: {
            cascate
        },
        props: ['message'],
        data () {
            return {
                test: 'Control component'                        
            }
        }
    }

</script>