<template>
    <div>
        <h3>{{name}}</h3>
        <div>
            <cascate name="users" 
                address="https://api.github.com/users?page=1&per_page=2"
                objectValue="id" 
                objectName="login"
                :clicked="clicked.bind(null, 1)"
                :requestData="buscaUsuarios.bind()">
            </cascate>
            </hr>
            <cascate name="repositories" 
                address="https://api.github.com/users/joohncruz/repos?page=1&per_page=4" 
                parent="users" 
                objectValue="id" 
                objectName="name"
                :clicked="clicked.bind()">
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
                name: 'Control component'                        
            }
        },
        methods: {
            clicked: function(id) {
                alert(id);
            },
            buscaUsuarios () {
                Vue.http.get('https://api.github.com/users?page=1&per_page=2')
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error))
            }
        }
    }

</script>