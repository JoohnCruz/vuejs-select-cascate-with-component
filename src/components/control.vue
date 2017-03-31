<template>
    <div>
        <h3>{{name}}</h3>
        <div>
            <cascate name="codinstituicao" 
                address="https://api.github.com/users?page=1&per_page=2"
                objectValue="id" 
                objectName="login"
                defaultMSG= "Selecione uma Instituicao">
            </cascate>
            </hr>
            <cascate name="codcidade" 
                address="https://api.github.com/users/joohncruz/repos?page=1&per_page=4" 
                parent="codinstituicao" 
                objectValue="id" 
                objectName="name"
                defaultMSG= "Selecione uma Cidade">
            </cascate>
           </hr>
            <cascate name="codcurso" 
                address="https://api.github.com/users/joohncruz/repos?page=1&per_page=4" 
                parent="codcidade" 
                objectValue="id" 
                objectName="name"
                defaultMSG= "Selecione uma Curso">
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
                console.log(id);
            }
            // buscaUsuarios (callback) {
            //     console.log('TRACE: buscaUsuarios')
            //     Vue.http.get('https://api.github.com/users?page=1&per_page=2')
            //         .then((response) => callback(response))
            //         .catch((error) => console.log(error))
            // }
        }
    }

</script>