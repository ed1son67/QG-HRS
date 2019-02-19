<template>
    <div class="main">
       
        <!-- <div class="item">
            <div class="label">
                学号*
            </div>
            <div class="right">
                <a-input placeholder="请输入学号" style="width:300px;" v-model="SID" id="success"/>
            </div>
        </div>
        <div class="item">
            <div class="label">
                性别*
            </div>
            <div class="right">
                <a-radio-group v-model="value" >
                    <a-radio :value="1">男</a-radio>
                    <a-radio :value="2">女</a-radio>
                </a-radio-group>
            </div>
        </div> -->
        <!-- <div class="item">
            <div class="label">
                宿舍*
            </div>
            <div class="right">
                <a-cascader :options="buildings" @change="onChange" changeOnSelect placeholder="请选择楼栋" />
            </div>
        </div> -->
        <!-- <div class="item">
            <div class="label">
                专业班级*
            </div>
            <div class="right">
                <a-input placeholder="请输入专业班级" style="width:300px;" />
            </div>
        </div> -->
        <!-- <div class="item">
            <div class="label">
                手机号码*
            </div>
            <div class="right">
                <a-input placeholder="请输入手机号码" style="width:300px;" />
            </div>
        </div> -->
        <!-- <div class="item">
            <div class="label">
                QQ*
            </div>
            <div class="right">
                <a-input placeholder="请输入QQ" style="width:300px;" />
            </div>
        </div>
        <div class="item">
            <div class="label">
                邮箱*
            </div>
            <div class="right">
                <a-input placeholder="请输入邮箱" style="width:300px;" />
            </div>
        </div>     -->

        <a-form :form="form"  @submit="handleSubmit">
            <a-form-item label="姓名"  v-bind="formItemLayout" has-feedback>
                <a-input v-decorator="[ 'name', {rules: [{ required: true, message: '请输入你的名字!' }]}]" placeholder="请输入你的名字" />
            </a-form-item>
            <a-form-item label="性别*" v-bind="formItemLayout">
                 <a-radio-group   
                    v-decorator="[ 'gender', {rules: [
                        { required: true, message: '请选择性别！' }                   
                    ]}]" >
                    <a-radio :value="1">男</a-radio>
                    <a-radio :value="0">女</a-radio>
                </a-radio-group>
            </a-form-item>
             <a-form-item label="手机号码"  v-bind="formItemLayout" has-feedback>
                <a-input 
                    v-decorator="[ 'phone', {rules: [
                        { required: true, message: '请输入正确的手机号码!', pattern: /^\d{11}$/, transform: value => +value}                                       
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
                        { required: true, message: '请输入正确的QQ！', pattern: /^[1-9]\d*$/, transform: value => +value }
                    ]}]" placeholder="请输入你的QQ" />
            </a-form-item>
             <a-form-item label="学号"  v-bind="formItemLayout" has-feedback>
                <a-input 
                    v-decorator="[ 'userID', {rules: [
                        { required: true, message: '请输入正确的学号！', pattern: /^\d{10}$/, transform: value => +value }                   
                    ]}]" placeholder="请输入你的学号" />
            </a-form-item>  
            <a-form-item label="楼栋"  v-bind="formItemLayout"  has-feedback>
                    <a-cascader :options="buildings"  changeOnSelect  placeholder="请选择楼栋"
                        v-decorator="[ 'building', {rules: [
                            { required: true, message: '请选择楼栋!' }                   
                        ]}]" 
                        style="width: 150px; "
                    />    
            </a-form-item>        
            <a-form-item label="房间号" v-bind="formItemLayout" has-feedback >
                <a-input 
                    v-decorator="[ 'room', {rules: [
                        { required: true, message: '请输入正确的房间号！', pattern: /^\d{3}$/, transform: value => +value }
                    ]}]" placeholder="房间号" 
                     style="width: 130px; "
                />
            </a-form-item>
            
            <a-form-item label="专业班级" v-bind="formItemLayout" has-feedback>
                <a-input v-decorator="[ 'class', {rules: [{ required: true, message: '请输入专业班级！' }]}]" placeholder="请输入专业班级" />                
            </a-form-item>
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
                    labelCol: { span: 6},
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
                phone: state => state.personalInfo.phone,
                gender: state => state.personalInfo.gender,
                email: state => state.personalInfo.email,
                class: state => state.personalInfo.class,
                qq: state => state.personalInfo.qq,
                room: state => state.personalInfo.room,
                building: state => state.personalInfo.building,
                userID: state => state.personalInfo.userID
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
                        gender: this.$form.createFormField({
                            value: this.gender,
                        }),
                        phone: this.$form.createFormField({
                            value: this.phone,
                        }),
                        email: this.$form.createFormField({
                            value: this.email,
                        }),
                        class: this.$form.createFormField({
                            value: this.class,
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
                        userID: this.$form.createFormField({
                            value: this.userID,
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
.main {
    height: auto;
    width: 100%;
    margin: 30px 0;
}
.item {
    display: flex;
    margin: 30px 5px;
}

.label {
    width: 200px;
    line-height: 34px;
}

</style>