<template>
    <div>
        
        </br>
        Name: {{name}}
        </br>
      
        {{ selected }}
        </br>
        <select :name="name" :id="name" v-model="selected" @change="shoot()">
            <option value="">{{mdefault}}</option>
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
        props: ['name', 'address', 'parent', 'data', 'objectValue', 'objectName', 'value', 'defaultMSG'],        
        data () {
            return {
                objects: [],
                selected: '',
                params: {},
                mdefault: '---'                
            }
        },
        created (){
            let self = this

            if(self.defaultMSG)
                self.mdefault = self.defaultMSG

            if(self.value)     
                self.selected = self.value

            if(self.parent)
                self.watchBus()
        },
        mounted () {
            let self = this
            self.build()
        },
        methods: {
            watchBus() {
                let self = this
                bus.$on(self.parent + '_selected', function(paramsSelected){
                    self.params = Object.assign({}, paramsSelected);
                    self.build()
                    self.shoot()
                })
            },
            getValue(option) {
                return option[this.objectValue];
            },
            getName(option) {
                return option[this.objectName];
            },
            build () {
                let self = this
                self.clear()
                self.fill()                
              
            },
            fill () {
                let self = this 
                
                if(self.parent){
                    if(Object.keys(self.params).length == 0) return;

                    if(!self.params[self.parent]) return;

                    console.log(self.name)
                    console.log(self.params)

                    Vue.http.get(this.address)
                        .then((response) => this.objects = response.body)
                        .catch((error) => console.log(error))
            
                } else {

                    console.log(self.name)
                    console.log(self.params)

                     Vue.http.get(this.address)
                        .then((response) => this.objects = response.body)
                        .catch((error) => console.log(error))
                }
            },
            shoot () {
                let self = this
                let p = self.params

                p[self.name] = self.selected

                bus.$emit(this.name + '_selected', p)
            },
            clear () {
                this.objects.splice(0)                
                this.selected = ""
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