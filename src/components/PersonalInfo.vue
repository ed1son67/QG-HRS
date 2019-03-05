<template>
    <div majorAndClass="main">
        <a-form :form="form"  @submit="handleSubmit">
            <a-form-item label="姓名"  v-bind="formItemLayout" has-feedback>
                <a-input v-decorator="[ 'name', {rules: [{ required: true, pattern: /^([\u4e00-\u9fa5\·]{1,16})$/, message: '请输入最多16位中文名字，允许使用“·”！' }]}]" placeholder="请输入你的名字" />
            </a-form-item>
            <a-form-item label="性别" v-bind="formItemLayout">
                 <a-radio-group   
                    v-decorator="[ 'sex', {rules: [
                        { required: true, message: '请选择性别！' }                   
                    ]}]" >
                    <a-radio value="男">男</a-radio>
                    <a-radio value="女">女</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="年龄"  v-bind="formItemLayout" has-feedback>
                <a-input v-decorator="[ 'age', {rules: [{ required: true, message: '请输入正确的年龄！', pattern: /^\d{2}$/, transform: value => +value }]}]" placeholder="请输入你的年龄" />
                
            </a-form-item>
             <a-form-item label="手机号码"  v-bind="formItemLayout" has-feedback>
                <a-input 
                    v-decorator="[ 'tel', {rules: [
                        { required: true, message: '请输入正确的手机号码!', pattern: /^1[3456789]\d{9}$/, transform: value => +value}                                       
                    ]}]" placeholder="请输入你的手机号码" />
            </a-form-item>
             <a-form-item label="邮箱" v-bind="formItemLayout" has-feedback>
                <a-input 
                    v-decorator="[ 'email', {rules: [
                        { required: true, type: 'email', message: '请输入正确的邮箱!'}
                    ]}]" placeholder="请输入你的邮箱" 
                />
            </a-form-item>
             <a-form-item label="QQ"  v-bind="formItemLayout" has-feedback>
                <a-input 
                    v-decorator="[ 'qq', {rules: [
                        { required: true, message: '请输入正确的QQ！', pattern: /^[1-9][0-9]{4,14}$/, transform: value => +value }
                    ]}]" placeholder="请输入你的QQ" />
            </a-form-item>
             <a-form-item label="学号"  v-bind="formItemLayout" has-feedback>
                <a-input 
                    v-decorator="[ 'id', {rules: [
                        { required: true, message: '请输入正确的学号！', pattern: /^\d{10}$/, transform: value => +value }                   
                    ]}]" placeholder="请输入你的学号" />
            </a-form-item>   
            <a-row :gutter="4">
                <a-col :span="12" >
                    <a-form-item label="宿舍" :wrapper-col="{ span: 9 }" :label-col="{ span: 14 }"  hasFeedback>
                        <a-cascader :options="buildings"  changeOnSelect  placeholder="请选择楼栋"
                            v-decorator="[ 'building', {rules: [
                                { required: true, message: '请选择楼栋!' }                   
                            ]}]"    
                            
                        />     
                    </a-form-item>  
                </a-col>
                <a-col :span="12" >
                    <a-form-item :wrapper-col="{ span: 8 }"  has-feedback  >
                         <a-input 
                            v-decorator="[ 'room', {rules: [
                                { required: true, message: '请输入正确的房间号！', pattern: /^[2-7]\d{2}$/, transform: value => +value }
                            ]}]" placeholder="房间号" 
                            
                        />
                    </a-form-item> 
                </a-col>
            </a-row>
            <a-row :gutter="4">
                <a-col :span="12">
                    <a-form-item label="专业班级及职务" :wrapper-col="{ span: 9 }" :label-col="{ span: 14 }" has-feedback >
                        <a-input v-decorator="[ 'majorAndClass', {rules: [{ required: true, message: '请输入专业班级！' },{ max: 50, message: '超出字符限制！'}]}]" placeholder="请输入专业班级"  
                         
                         /> 
                    </a-form-item>  
                </a-col>
                <a-col :span="12" >
                    <a-form-item :wrapper-col="{ span: 8 }"  has-feedback >
                        <a-input v-decorator="[ 'post', {rules: [{ required: true, message: '请输入班级职务！' },{ max: 50, message: '超出字符限制！'}]}]" placeholder="请输入班级职务" />                                       
                    </a-form-item> 
                </a-col>
            </a-row>
              
            <a-form-item >
                <a-button 
                    type="primary"
                    html-type="submit"
                >
                    下一页
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'personalInfo',
        data() {
            return {
                
                formItemLayout: {
                    labelCol: { span: 7},
                    wrapperCol: { span: 9 },
                },
                buildings: [{
                    value: '西区',
                    label: '西区',
                    children: [{
                        value: '西一',
                        label: '西一',
                    }, {
                        value: '西二',
                        label: '西二',
                    },{
                        value: '西三',
                        label: '西三',
                    },{
                        value: '西四',
                        label: '西四',
                    },{
                        value: '西五',
                        label: '西五',
                    },{
                        value: '西六',
                        label: '西六',
                    },{
                        value: '西七',
                        label: '西七',
                    },{
                        value: '西八',
                        label: '西八',
                    },{
                        value: '西九',
                        label: '西九',
                    },{
                        value: '西十',
                        label: '西十',
                    },{
                        value: '西十一',
                        label: '西十一',
                    },{
                        value: '西十二',
                        label: '西十二',
                    },{
                        value: '西十三',
                        label: '西十三',
                    },{
                        value: '西十四',
                        label: '西十四',
                    },{
                        value: '西十五',
                        label: '西十五',
                    }],
                    }, {
                    value: '东区',
                    label: '东区',
                    children: [{
                        value: '东一',
                        label: '东一',
                    }, {
                        value: '东二',
                        label: '东二',
                    },{
                        value: '东三',
                        label: '东三',
                    },{
                        value: '东四',
                        label: '东四',
                    },{
                        value: '东五',
                        label: '东五',
                    },{
                        value: '东六',
                        label: '东六',
                    },{
                        value: '东七',
                        label: '东七',
                    },{
                        value: '东八',
                        label: '东八',
                    },{
                        value: '东九',
                        label: '东九',
                    },{
                        value: '东十',
                        label: '东十',
                    },{
                        value: '东十一',
                        label: '东十一',
                    },{
                        value: '东十二',
                        label: '东十二',
                    },{
                        value: '东十三',
                        label: '东十三',
                    },{
                        value: '东十四',
                        label: '东十四',
                    }
                    ],
                }], 
            }
        },
        computed: {
            ...mapState({   
                name: state => state.personalInfo.name,
                tel: state => state.personalInfo.tel,
                sex: state => state.personalInfo.sex,
                email: state => state.personalInfo.email,
                majorAndClass: state => state.personalInfo.majorAndClass,
                qq: state => state.personalInfo.qq,
                room: state => state.personalInfo.room,
                building: state => state.personalInfo.building,
                id: state => state.personalInfo.id,
                post: state => state.personalInfo.post,
                age: state => state.personalInfo.age
            })
        },
        created () {
            this.$store.commit('initializeSteps', 0);

            this.form = this.$form.createForm(this, {
                onFieldsChange: (_, changedFields) => {
                    this.$emit('change', changedFields);
                },
                mapPropsToFields: () => {
                    return {
                        name: this.$form.createFormField({
                            value: this.name,
                        }),
                        sex: this.$form.createFormField({
                            value: this.sex,
                        }),
                        tel: this.$form.createFormField({
                            value: this.tel,
                        }),
                        email: this.$form.createFormField({
                            value: this.email,
                        }),
                        majorAndClass: this.$form.createFormField({
                            value: this.majorAndClass,
                        }),
                        room: this.$form.createFormField({
                            value: this.room,
                        }),
                        qq: this.$form.createFormField({
                            value: this.qq,
                        }),
                        building: this.$form.createFormField({
                            value: this.building,
                        }),
                        id: this.$form.createFormField({
                            value: this.id,
                        }),
                        age: this.$form.createFormField({
                            value: this.age,
                        }),
                        post: this.$form.createFormField({
                            value: this.post,
                        })
                    };
                },
                onValuesChange: (_, values) =>{                    
                    this.$store.commit('update', values);
                },
            });
        },
        methods: {
            nextPage() {
                this.$store.commit('nextPage', 1);
                this.$router.push('study');
                
            },
            handleSubmit  (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.nextPage();
                    }
                });
            }
        }
    }
</script>

<style lang="" scoped>


</style>