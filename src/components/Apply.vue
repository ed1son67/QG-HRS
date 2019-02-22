<template>
    <div class="main">
        <a-form :form="form"  @submit="handleSubmit">
            <a-form-item label="* 诚信条款"  v-bind="formItemLayout" >
                <a-checkbox style="font-weight: 600;" @change="onChange"  
                    v-decorator="[ 'agree', {valuePropName: 'checked', initialValue: true,}, {
                        rules: [
                                             
                    ]}]"
                >
                    本人具有正直诚信价值观，承诺所填简历真实可信，并对由于提供虚假信息而引发的结果承担相应的法律责任，如有虚假，责任自负。
                </a-checkbox>
            </a-form-item>
            <a-form-item  v-bind="formItemLayout">
                <span slot="label">组队报名
                    <a-tooltip title="最多可接受4人组队报名">
                        <a-icon type="question-circle-o" />
                    </a-tooltip>
                </span>
                <a-row>
                    <a-col :span="1" style="margin-right: 20px;">
                        <a-switch 
                            v-decorator="['isSingle', { valuePropName: 'checked' }]" />
                    </a-col>
                    <a-col :span="4" style="margin-right: 10px;">
                        <a-input 
                            v-decorator="[ 'teammate_1', ]" placeholder="队友姓名" :disabled="!isSingle " />
                    </a-col>
                    <a-col :span="4" style="margin-right: 10px;">
                        <a-input v-decorator="[ 'teammate_2', ]" placeholder="队友姓名" :disabled="!isSingle "/>
                    </a-col>
                    <a-col :span="4" style="margin-right: 10px;">
                        <a-input v-decorator="[ 'teammate_3', ]" placeholder="队友姓名" :disabled="!isSingle "/>
                    </a-col>
                </a-row>            
            </a-form-item>
            <a-form-item label="* 应聘类型" v-bind="formItemLayout">
                  <a-select defaultValue="实习生招聘" style="width: 120px" >
                    <a-select-option value="实习生招聘">实习生招聘</a-select-option>
                </a-select>
            </a-form-item>
             <a-form-item label="* 工作地点"  v-bind="formItemLayout">
                <a-select defaultValue="广州" style="width: 80px" >
                    <a-select-option value="广州">广州</a-select-option>
                </a-select>
            </a-form-item>
             <a-form-item label="应征方向" v-bind="formItemLayout" >
                <a-radio-group  
                    v-decorator="[ 'group', {rules: [
                        { required: true, message: '请选择方向！' }                   
                    ]}]"
                >
                    <a-radio :value="1" class="radio">软件开发-web前端方向</a-radio>
                    <a-radio :value="2" class="radio">软件开发-web后台方向</a-radio>
                    <a-radio :value="3" class="radio">软件开发-移动客户端开发方向</a-radio>
                    <a-radio :value="4" class="radio">软件开发-嵌入式开发方向</a-radio>
                    <a-radio :value="5" class="radio">软件开发-图形图像处理与游戏开发方向（手游组）</a-radio>
                    <a-radio :value="6" class="radio">软件开发-大数据处理及数据挖掘方向</a-radio>
                    <a-radio :value="7" class="radio">交互设计-设计师方向（笔试时请带上铅笔及橡皮擦）</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="是否服从调剂"  v-bind="formItemLayout" >
                <a-radio-group  name='radioGroup'
                    v-decorator="[ 'isObey', {rules: [
                        { required: true, message: '请选择是否服从调剂' }                   
                    ]}]"     
                >
                    <a-radio :value="1">是</a-radio>
                    <a-radio :value="0">否</a-radio>
                </a-radio-group>        
            </a-form-item>
            <a-form-item >
                <a-button type="primary" html-type="submit">下一页</a-button>
                <a-button style="margin-left: 8px" @click="prevPage">上一页</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'apply',
        data() {
            return {
                formItemLayout: {
                    labelCol: { span: 5},
                    wrapperCol: { span: 19 },
                },
            }
        },
        computed: {
            ...mapState({   
                group: state => state.apply.group,
                isObey: state => state.apply.isObey,
                isSingle: state => state.apply.isSingle,
                teammate_1: state => state.apply.teammate_1,
                teammate_2: state => state.apply.teammate_2,
                teammate_3: state => state.apply.teammate_3,
            })
        },
        watch: {
            isSingle(val) {
                if (val == false) {
                    this.$store.commit('resetTeam');
                }
            },
            teammate_1(val) {
                this.form.setFieldsValue({teammate_1: val});
            },
            teammate_2(val) {
                this.form.setFieldsValue({teammate_2: val});
            },
            teammate_3(val) {
                this.form.setFieldsValue({teammate_3: val});
            }
        },
        created () {
            this.$store.commit('initializeSteps', 3);

            this.form = this.$form.createForm(this, {
                onFieldsChange: (_, changedFields) => {
                    this.$emit('change', changedFields);
                },
                mapPropsToFields: () => {
                    return {
                        group: this.$form.createFormField({
                            value: this.group,
                        }),
                        isObey: this.$form.createFormField({
                            value: this.isObey,
                        }),
                        isSingle: this.$form.createFormField({
                            value: this.isSingle,
                        }),
                        teammate_1: this.$form.createFormField({
                            value: this.teammate_1,
                        }),
                        teammate_2: this.$form.createFormField({
                            value: this.teammate_2,
                        }),
                        teammate_3: this.$form.createFormField({
                            value: this.teammate_3,
                        }),
                        
                    };
                },
                onValuesChange: (_, values) =>{
                    this.$store.commit('update', values);
                    console.log(values)
                },
            });
        },
        methods: {
            onChange(e) {
                console.log(e.target.checked)
                let statu = e.target.checked;
                
               
            },
            nextPage() {
                // this.$store.state.app.right[4] = true;
                this.$store.commit('nextPage', 4);
                this.$router.push('result');
            },
            prevPage() {
                this.$store.commit('prevPage');
                this.$router.push('detail');
            },
            handleSubmit  (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        
                        this.$store.dispatch("sent");
                        this.nextPage();
                    }
                });
            },
        }
    }
</script>

<style lang="" scoped>

</style>