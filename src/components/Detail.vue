<template>
    <div class="main">
        <a-form :form="form"  @submit="handleSubmit" layout="vertical">
            <a-row type="flex" justify="space-between">
                <a-col :span="11">
                    <a-form-item label="兴趣爱好"  v-bind="formItemLayout" >
                        <a-textarea 
                            v-decorator="[ 'hobby', {rules: [
                                {required: true,  message: '请填写该项！'},
                                { max: 44, message: '超出字符限制！' }
                            ]}]" placeholder="请输入兴趣爱好" :autosize="{ minRows: 2, maxRows: 2 }" 
                        />        
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="座右铭" v-bind="formItemLayout" >
                        <a-textarea v-decorator="[ 'motto', {rules: [
                                {required: true,  message: '请填写该项！'},
                                {max: 20, message: '超出字符限制！' }
                            ]}]" placeholder="请输入座右铭" :autosize="{ minRows: 2, maxRows: 2 }"
                        />        
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row type="flex" justify="space-between">
                <a-col :span="11">
                    <a-form-item label="自我评价"  v-bind="formItemLayout" >
                        <a-textarea 
                            v-decorator="[ 'evaluation', {rules:[
                                {required: true,  message: '请填写该项！'},
                                {max: 230, message: '超出字符限制！'}
                            ]}]" placeholder="请输入自我评价" :autosize="{ minRows: 3, maxRows: 3 }" 
                        />        
                    </a-form-item>
                </a-col>
                
                <a-col :span="12">
                    <a-form-item label="参加其他学生科技团队、普通社团情况说明" v-bind="formItemLayout" >
                        <a-textarea 
                            v-decorator="['explanation', {rules:[
                                {required: true,  message: '请填写该项！'},
                                {max: 26, message: '超出字符限制！'}
                            ]}]" placeholder="请说明情况" :autosize="{ minRows: 3, maxRows: 3 }"
                        />        
                    </a-form-item>
                </a-col>
            </a-row>
            
                <a-form-item label="请简述一下大学四年的个人规划以及为什么希望加入QG工作室"  :label-col="formItemLayout.labelCol" :wrapper-col="{ span: 24 }">
                    <a-textarea 
                        v-decorator="[ 'reason', {rules:[
                            {required: true, max: 280,  message: '请填写该项！'},
                            {message: '超出字符限制！'}
                        ]}]" placeholder="请简述一下大学四年的个人规划以及为什么希望加入QG工作室" :autosize="{ minRows: 4, maxRows: 4 }"
                    />                                        
                </a-form-item>
            
            <a-form-item label="请简述能体现你以下四个方面的一件事:（1）善于协作（2）刻苦努力（3）甘于奉献（4）持之以恒"  :label-col="formItemLayout.labelCol" :wrapper-col="{ span: 24 }">
                <a-textarea 
                    v-decorator="['experience',{rules:[
                        {required: true, message: '请填写该项！'},
                        { max: 320, message: '超出字符限制！'}
                    ]}]" placeholder="请简述能体现你以下四个方面的一件事" :autosize="{ minRows: 4, maxRows: 4 }"
                />                        
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
        name: 'detail',
        data() {
            return {
                formItemLayout: {
                    labelCol: { span:0 },
                    wrapperCol: { span:24 },
                },
            }
        },
        computed: {
            ...mapState({   
                hobby: state => state.detail.hobby,
                motto: state => state.detail.motto,
                evaluation: state => state.detail.evaluation,
                explanation: state => state.detail.explanation,
                reason: state => state.detail.reason,
                experience: state => state.detail.experience
            })
        },
        created () {
            this.$store.commit('initializeSteps', 2);

            this.form = this.$form.createForm(this, {
                onFieldsChange: (_, changedFields) => {
                    this.$emit('change', changedFields);
                },
                mapPropsToFields: () => {
                    return {
                        hobby: this.$form.createFormField({
                            value: this.hobby,
                        }),
                        motto: this.$form.createFormField({
                            value: this.motto,
                        }),
                        evaluation: this.$form.createFormField({
                            value: this.evaluation,
                        }),
                        explanation: this.$form.createFormField({
                            value: this.explanation,
                        }),
                        reason: this.$form.createFormField({
                            value: this.reason,
                        }),
                        experience: this.$form.createFormField({
                            value: this.experience,
                        }),
                    };
                },
                onValuesChange: (_, values) =>{
                    this.$store.commit('update', values);
                },
            });
        },
        watch: {
            
        },
        methods: {
            nextPage() {
                this.$store.commit('nextPage', 3);
                this.$router.push('apply');                
            },
            prevPage() {
                this.$store.commit('prevPage');
                this.$router.push('study');   
            },
            handleSubmit  (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.nextPage();                        
                    }
                });
            },
        }
    }
</script>

<style lang="" scoped>

</style>