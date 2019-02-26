<template>
    <div class="main">
        <a-form :form="form"  @submit="handleSubmit">
            
            <a-form-item label="* 诚信条款"  v-bind="formItemLayout" >
                <a-checkbox style="font-weight: 600;" @change="onCheckedChange"  defaultChecked>
                    本人具有正直诚信价值观，承诺所填简历真实可信，并对由于提供虚假信息而引发的结果承担相应的法律责任，如有虚假，责任自负。
                </a-checkbox>
                <a-alert showIcon v-if="isDisabled" message="请认真阅读《诚信条款》并勾选，才可参加本次训练营。" type="warning" ></a-alert>
            </a-form-item>
           
               
                <a-row>
                    <a-col :span="5">
                         <span style="line-height: 45px;">* 组队报名
                            <a-tooltip title="最多可接受4人组队报名">
                                <a-icon type="question-circle-o" />
                            </a-tooltip>
                        </span>
                    </a-col>
                    <a-col :span="1" style="margin-right: 20px;">
                        <a-form-item>
                            <a-switch v-decorator="['isSingle', { valuePropName: 'checked' }]" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="5" style="margin-right: 10px;width:180px;">
                        <a-form-item><a-input v-decorator="[ 'teammate_1', {rules: [{     pattern: /^([\u4e00-\u9fa5\·]{1,16})$/, message: '请输入最多16位中文名字！' }]}]" placeholder="队友姓名" :disabled="!isSingle " /></a-form-item>
                    </a-col>
                    <a-col :span="5" style="margin-right: 10px;width:180px;">
                        <!-- <a-input v-decorator="[ 'teammate_2', ]" placeholder="队友姓名" :disabled="!isSingle "/> -->
                        <a-form-item><a-input v-decorator="[ 'teammate_2', {rules: [{     pattern: /^([\u4e00-\u9fa5\·]{1,16})$/, message: '请输入最多16位中文名字！' }]}]" placeholder="队友姓名" :disabled="!isSingle " /></a-form-item>

                    </a-col>
                    <a-col :span="5" style="margin-right: 10px;width:180px;">
                        <!-- <a-input v-decorator="[ 'teammate_3', ]" placeholder="队友姓名" :disabled="!isSingle "/> -->
                        <a-form-item><a-input v-decorator="[ 'teammate_3', {rules: [{     pattern: /^([\u4e00-\u9fa5\·]{1,16})$/, message: '请输入最多16位中文名字！' }]}]" placeholder="队友姓名" :disabled="!isSingle " /></a-form-item>
                    </a-col>
                </a-row>            
           
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
                    v-decorator="[ 'grouper', {rules: [
                        { required: true, message: '请选择方向！' }                   
                    ]}]"
                >
                    <a-radio value="前端" class="radio">软件开发-web前端方向</a-radio>
                    <a-radio value="后台" class="radio">软件开发-web后台方向</a-radio>
                    <a-radio value="移动" class="radio">软件开发-移动客户端开发方向</a-radio>
                    <a-radio value="嵌入式" class="radio">软件开发-嵌入式开发方向</a-radio>
                    <a-radio value="手游" class="radio">软件开发-图形图像处理与游戏开发方向（手游组）</a-radio>
                    <a-radio value="数据挖掘" class="radio">软件开发-大数据处理及数据挖掘方向</a-radio>
                    <a-radio value="设计师" class="radio">交互设计-设计师方向（笔试时请带上铅笔及橡皮擦）</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="是否服从调剂"  v-bind="formItemLayout" style="">
                <a-radio-group  name='radiogrouper'
                    v-decorator="[ 'isObey', {rules: [
                        { required: true, message: '请选择是否服从调剂' }                   
                    ]}]"     
                >
                    <a-radio value="1">是</a-radio>
                    <a-radio value="0">否</a-radio>
                </a-radio-group>        
            </a-form-item>
            <a-form-item style="padding: 30px 0 43px 0;">
                <a-button type="primary" html-type="submit" :disabled="isDisabled">确认无误，投递简历</a-button>
                <a-button style="margin-left: 8px" @click="prevPage">上一页</a-button>
            </a-form-item>
        </a-form>
        <a-modal
            title="投递简历"
            :visible="visible"
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
            centered
            :closable=false
            :maskClosable=false
            :keyboard=false
            :okText="okText"
            :cancelText="cancelText"
            width='600px'
            :bodyStyle=" {padding: '30px' }"
            :cancelButtonProps="{ props: {disabled: isCommit} }"
            :okButtonProps="{ props: {disabled: isCommit} }"
            >
            <p>{{ModalText}}</p>
            <p>{{ModalText2}}</p>
            <p v-show="showCountDown">页面将会在{{countDown}}秒后跳转</p>
    </a-modal>
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
                ModalText: '亲爱的' + name + '同学，我们期待你的加入！',
                ModalText2: '每个人仅有一次报名机会，重复提交简历将会覆盖之前的信息！',
                visible: false,
                confirmLoading: false,
                okText: '确认投递',
                cancelText: '我再想想',
                countDown: 3,
                showCountDown: false ,
                isDisabled: false,
                isCommit: false
            }
        },
        computed: {
            ...mapState({   
                name: state => state.personalInfo.name,
                grouper: state => state.apply.grouper,
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
                    this.form.setFieldsValue({teammate_1: ''});
                    this.form.setFieldsValue({teammate_2: ''});
                    this.form.setFieldsValue({teammate_3: ''});
                }
            },
            // teammate_1(val) {
            //     this.form.setFieldsValue({teammate_1: val});
            // },
            // teammate_2(val) {
            //     this.form.setFieldsValue({teammate_2: val});
            // },
            // teammate_3(val) {
            //     this.form.setFieldsValue({teammate_3: val});
            // }
        },
        created () {
            this.$store.commit('initializeSteps', 3);

            this.form = this.$form.createForm(this, {
                onFieldsChange: (_, changedFields) => {
                    this.$emit('change', changedFields);
                },
                mapPropsToFields: () => {
                    return {
                        grouper: this.$form.createFormField({
                            value: this.grouper,
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
            showModal() {
                this.visible = true
            },
            handleOk(e) {
                this.ModalText = '正在为你光速投递简历，请不要关闭网页！';
                this.ModalText2 = '';
                this.confirmLoading = true;

                let request = this.$store.dispatch("sent");
                let self = this;
                self.isCommit = true;

                request.then(function(res){
                    if (res.data.status == '1') {
                        self.ModalText = '投递简历成功！请为笔试做好准备，笔试结果我们将会以短信的形式联系你，祝你好运！';
                        self.showCountDown = true;
                        self.confirmLoading = false;

                            let itvl = setInterval(function() {
                                self.countDown--
                                
                            if (self.countDown <= 0) {
                                window.location.href = 'http://www.ed1son.cn:8080/join'
                                clearInterval(itvl)
                            }
                        }, 1000)
                    } else {
                        self.confirmLoading = false;
                        self.isCommit = false;
                        self.ModalText = '投递失败，请检查你所填写的信息后重试！';
                    }
                }).catch(function(err){
                    self.confirmLoading = false;
                    self.isCommit = false;
                    self.ModalText = '投递失败，您的网络似乎有问题，请检查后重试！';
                })            
            },
            handleCancel(e) {
                console.log('Clicked cancel button');
                this.visible = false
            },
            onCheckedChange(e) {
                console.log(e.target.checked)
                let state = e.target.checked;
                if (state == false) {
                    this.isDisabled = true;
                } else 
                    this.isDisabled = false;
            },
           
            prevPage() {
                this.$store.commit('prevPage');
                this.$router.push('detail');
            },
            handleSubmit  (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        
                        this.showModal();
                        // this.nextPage();
                    }
                });
            },
        }
    }
</script>

<style lang="" scoped>

</style>