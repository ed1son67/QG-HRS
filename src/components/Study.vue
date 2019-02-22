<template>
    <div class="main">
        <a-form :form="form"  @submit="handleSubmit">
            <a-form-item label="绩点（大一上学期）"  v-bind="formItemLayout" has-feedback>
                <a-input v-decorator="[ 'achievementPoint', {rules: [{ required: true, pattern: /^[0-9]+([.]{1}[0-9]+){0,1}$/, message: '请输入正确的绩点!' }]}]" placeholder="请输入你的绩点" />
            </a-form-item>
            <a-form-item label="有无挂科" v-bind="formItemLayout">
                 <a-radio-group   
                    v-decorator="[ 'isFail', {rules: [
                        { required: true, message: '请选择有无挂科！' }                   
                    ]}]" >
                    <a-radio value='false'>无</a-radio>
                    <a-radio value='true'>有</a-radio>
                </a-radio-group>
            </a-form-item>
             <a-form-item label="C语言理论课成绩"  v-bind="formItemLayout" has-feedback>
                <a-input 
                    v-decorator="[ 'cSocre', {rules: [
                        { required: true, message: '请输入正确的C语言理论课成绩!', pattern: /^[1-9]\d*$/, transform: value => +value}                                       
                    ]}]" placeholder="请输入C语言理论课成绩" />
            </a-form-item>
             <a-form-item label="C语言实验课成绩" v-bind="formItemLayout" has-feedback>
                <a-input 
                    v-decorator="[ 'cExperiment', {rules: [
                        { required: true, pattern: /^[1-9]\d*$/, message: '请输入正确的C语言实验课成绩!'}
                    ]}]" placeholder="请输入C语言实验课成绩" 
                />
            </a-form-item>
             <a-form-item label="大英（1）成绩"  v-bind="formItemLayout" has-feedback>
                <a-input 
                    v-decorator="[ 'englishScore', {rules: [
                        { required: true, message: '请输入正确的成绩！', pattern: /^[1-9]\d*$/, transform: value => +value }
                    ]}]" placeholder="请输入正确的大英（1）成绩" />
            </a-form-item>
            <p>奖惩情况和实践经历（社会实践或计算机相关技术学习掌握情况）</p>
             <a-form-item :wrapper-col="{span: 16}" >
                <a-textarea  
                    v-decorator="[ 'rewardsAndPunishments', {rules: [
                        {required: true,  message: '请简述奖惩情况和实践经历！'}, {max: 200, message: '超出字数限制！'}
                    ]}]" placeholder="请简述奖惩情况和实践经历" :autosize="{minRows:4, maxRows:4}"
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
        name: 'study',
        data() {
            return {
                 formItemLayout: {
                    labelCol: { span: 7},
                    wrapperCol: { span: 9 },
                },  
            }
        },
        computed: {
             ...mapState({   
                achievementPoint: state => state.study.achievementPoint,
                isFail: state => state.study.isFail,
                cSocre: state => state.study.cSocre,
                cExperiment: state => state.study.cExperiment,
                englishScore: state => state.study.englishScore,
                rewardsAndPunishments: state => state.study.rewardsAndPunishments,
            })
        },
        beforeCreate() {
            
            
        },
        created () {
            this.$store.commit('initializeSteps', 1);

            this.form = this.$form.createForm(this, {
                onFieldsChange: (_, changedFields) => {
                    this.$emit('change', changedFields);
                },
                mapPropsToFields: () => {
                    return {
                        achievementPoint: this.$form.createFormField({
                            value: this.achievementPoint,
                        }),
                        isFail: this.$form.createFormField({
                            value: this.isFail,
                        }),
                        cSocre: this.$form.createFormField({
                            value: this.cSocre,
                        }),
                        cExperiment: this.$form.createFormField({
                            value: this.cExperiment,
                        }),
                        englishScore: this.$form.createFormField({
                            value: this.englishScore,
                        }),
                        rewardsAndPunishments: this.$form.createFormField({
                            value: this.rewardsAndPunishments,
                        }),
                    };
                },
                onValuesChange: (_, values) =>{
                    this.$store.commit('update', values);
                },
            });
        },
        methods: {
            nextPage() {
                this.$store.commit('nextPage', 2);
                this.$router.push('detail');
            },
            prevPage() {
                this.$store.commit('prevPage');
                this.$router.push('personalInfo');
            },
            handleSubmit  (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.nextPage();
                        console.log('Received values of form: ', values);
                    }
                });
            },
        }
    }
</script>

<style lang="" scoped>

</style>