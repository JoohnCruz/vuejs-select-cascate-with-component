<template>
    <div>
        
        </br>
        
        Name: {{name}}
        </br>
      
        {{ selected }}
        </br>
        <select :name="name" :id="name" v-model="selected" @change="shoot()">
            <template v-for="obj in objects">
                <option :value="getValue(obj)">{{getName(obj)}}</option>
            </template>
        </br>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'cascate',
        props: ['name', 'address', 'parent', 'data', 'objectValue', 'objectName'],
        data () {
            return {
                objects: [],
                selected: ''                
            }
        },
        created (){
            let self = this;            

            if(!this.parent) return; 
            
            bus.$on(this.parent + '_selected', function(selected){
                self.build(selected);
            })

        },
        mounted () {
            this.build(this.selected)

        },
        methods: {
            getValue(option) {
                return option[this.objectValue];
            },
            getName(option) {
                return option[this.objectName];
            },
            build (parentSelected) {
                this.clear()
                
                if(!this.parent) this.fillNonParent()

                if(parentSelected) this.fillParent(parentSelected)
              
            },
            fillNonParent () {
                Vue.http.get(this.address)
                    .then((response) => this.objects = response.body)
                    .catch((error) => console.log(error))
            },
            fillParent (parentSelected) {
                // In this method will be used if there is one learn, with this we will need to customize the url to your API
                Vue.http.get(this.address)
                    .then((response) => this.objects = response.body)
                    .catch((error) => console.log(error))
            },
            shoot () {
                bus.$emit(this.name + '_selected', this.selected)
            },
            clear () {
                this.objects.splice(0)
                this.selected = null;
            }
        }
    }

</script>

<style lang="">
    
select {
    width: 200px;
    height: 30px;
    outline-color: #41B883
}

</style>