//该文件用于创建store
//引入vue
import Vue from "vue";
//引入vuex
import Vuex from "vuex";
//使用vuex，vuex的使用一定要在store创建之前
Vue.use(Vuex)


//响应组件中的动作
const actions = {
    srh(context, value) {
        context.commit('SRH', value)
    },
    pwd_Srh(context, subarr) {
        context.commit('PWD_Srh', subarr)
    },
    ex_Srh(context, value) {
        context.commit('EX_Srh', value)
    },
    pwd_Exsrh(context, subarr) {
        context.commit('PWD_EXsrh', subarr)
    },
    agree(context,row){
        context.commit('AGREE',row)
    },
    del(context,row){
        context.commit('DEL',row)
    }
}
//操作数据
const mutations = {
    //筛选函数
    SRH(state, value) {
        //判断来自那个组件的信息
        if (value.flag == 1) {//来自仓库管理组件
            state.bookData = value.subarr
            //过滤器数组
            let filarr = [state.name, state.bookName, state.period, state.statment]
            // 过滤，过滤条件为空则返回全部数据
            filarr.forEach((item, num) => {
                if (num == 0 && item != "") {
                    state.bookData = state.bookData.filter((book) => {
                        return book.name == state.name;
                    });
                } else if (num == 1 && item != "") {
                    state.bookData = state.bookData.filter((book) => {
                        return book.bookName == state.bookName;
                    });
                } else if (num == 2 && item != "") {
                    state.bookData = state.bookData.filter((book) => {
                        return book.period == state.period;
                    });
                } else if (num == 3 && item != "") {
                    state.bookData = state.bookData.filter((book) => {
                        return book.statment == state.statment;
                    });
                }
            });
        } else if (value.flag == 0) {
            state.bookList = value.subarr
            //过滤器数组
            let filarr = [state.name, state.bookName, state.period]
            // 过滤，过滤条件为空则返回全部数据
            filarr.forEach((item, num) => {
                if (num == 0 && item != "") {
                    state.bookList = state.bookList.filter((book) => {
                        return book.name == state.name;
                    });
                } else if (num == 1 && item != "") {
                    state.bookList = state.bookList.filter((book) => {
                        return book.bookName == state.bookName;
                    });
                } else if (num == 2 && item != "") {
                    state.bookList = state.bookList.filter((book) => {
                        return book.period == state.period;
                    });
                }
            });
        }
    },
    PWD_Srh(state, subarr) {
        state.pwdList = subarr
        //过滤器数组
        let filarr = [state.academe, state.pwd_Name, state.account, state.pwd_Statement]
        // 过滤，过滤条件为空则返回全部数据
        filarr.forEach((item, num) => {
            if (num == 0 && item != "") {
                state.pwdList = state.pwdList.filter((pwd) => {
                    return pwd.academe == state.academe;
                });
            } else if (num == 1 && item != "") {
                state.pwdList = state.pwdList.filter((pwd)=>{
                    return pwd.pwd_Name == state.pwd_Name;
                });
            } else if (num == 2 && item != "") {
                state.pwdList = state.pwdList.filter((pwd) => {
                    return pwd.account == state.account;
                });
            } else if (num == 3 && item != "") {
                state.pwdList = state.pwdList.filter((pwd) => {
                    return pwd.pwd_Statement == state.pwd_Statement;
                });
            }
        });
    },

    EX_Srh(state, value) {
        if (value.flag == 1) {
            state.bookData = value.subarr
            state.name = ''
            state.bookName = ''
            state.period = ''
            state.statment = ''
        } else if (value.flag == 0) {
            state.bookList = value.subarr
            state.name = ''
            state.bookName = ''
            state.period = ''
        }
    },
    PWD_EXsrh(state, subarr) {
        state.pwdList = subarr
        state.academe = ''
        state.pwd_Name = ''
        state.account = ''
        state.pwd_Statement = ''
    },

}
//存储数据
const state = {
    //userManage的数据
    userName: "",
    sid: "",
    userList: [
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "蒋天豪",
            sid: "202031061432",
            phone: "18181947511",
            iseditor: false,
        },
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "蒋天豪",
            sid: "202031061432",
            phone: "18181947511",
            iseditor: false,
        },
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "蒋天豪",
            sid: "202031061432",
            phone: "18181947511",
            iseditor: false,
        },
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "蒋天豪",
            sid: "202031061432",
            phone: "18181947511",
            iseditor: false,
        },
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "蒋天豪",
            sid: "202031061432",
            phone: "18181947511",
            iseditor: false,
        },
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "蒋天豪",
            sid: "202031061432",
            phone: "18181947511",
            iseditor: false,
        },
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "蒋天豪",
            sid: "202031061432",
            phone: "18181947511",
            iseditor: false,
        },
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "蒋天豪",
            sid: "202031061432",
            phone: "18181947511",
            iseditor: false,
        },
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "蒋天豪",
            sid: "202031061432",
            phone: "18181947511",
            iseditor: false,
        },
        {
            num: "1",
            academe: "计算机科学学院",
            account: "202031061411",
            pwd: "**********",
            name: "吴浩然",
            sid: "202031061433",
            phone: "18181947511",
            iseditor: false,
        },
    ],

    //仓库管理组件的数据
    name: "",
    bookName: "",
    period: "",
    statment: "",
    bookData: [
        {
            num: "1",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            statment: "已取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
        {
            num: "2",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            statment: "未取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
        {
            num: "3",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            statment: "已取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
        {
            num: "4",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            statment: "已取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
        {
            num: "5",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            statment: "已取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
        {
            num: "6",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            statment: "已取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
        {
            num: "7",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "马克思院",
            statment: "已取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
        {
            num: "8",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年5月刊",
            date: "2021-10",
            mount: "10",
            name: "计科院",
            statment: "已取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
        {
            num: "9",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年3月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            statment: "已取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
        {
            num: "10",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            statment: "未取",
            checkDate: "2022-7-20",
            account: "202031061433",
            iseditor: false,
        },
    ],

    //subscribe页的数据
    sub_name: '',
    sub_bookName: '',
    sub_period: '',
    bookList: [
        {
            num: "1",
            bookName: "中华人民共和国全国人民代表大会常务委员会公报",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            account: "202031061433",
        },
        {
            num: "2",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            account: "202031061433",
        },
        {
            num: "3",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            account: "202031061433",
        },
        {
            num: "4",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            account: "202031061433",
        },
        {
            num: "5",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            account: "202031061433",
        },
        {
            num: "6",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            account: "202031061432",
        },
        {
            num: "7",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "蒋天豪",
            account: "202031061432",
        },
        {
            num: "8",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "吴浩然",
            account: "202031061432",
        },
        {
            num: "9",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "计科院",
            account: "202031061433",
        },
        {
            num: "10",
            bookName: "中国戏剧",
            period: "2022年7月刊",
            date: "2021-10",
            mount: "10",
            name: "吴浩然",
            account: "202031061433",
        },
    ],

    //pwdManage页的数据
    academe: '',
    pwd_Name: '',
    account: '',
    pwd_Statement: '',
    pwdList: [
        {
            num: "1",
            pwd_Name: "蒋天豪",
            academe: "计科院",
            account: "20203106141x",
            phone: "18181123456",
            date: "2022-7-21",
            img: require('D:/新建文件夹/文件/开发/bookmanage-vue/src/assets/img/header.png'),
            pwd_Statement: "已通过",
            checked: false,
        },
        {
            num: "2",
            pwd_Name: "蒋天豪",
            academe: "计科院",
            account: "20203106141x",
            phone: "18181123456",
            date: "2022-7-21",
            img: require('D:/新建文件夹/文件/开发/bookmanage-vue/src/assets/img/header.png'),
            pwd_Statement: "待处理",
            checked: false
        },
        {
            num: "3",
            pwd_Name: "计科院",
            academe: "计科院",
            account: "20203106141x",
            phone: "18181123456",
            date: "2022-7-21",
            img: require('D:/新建文件夹/文件/开发/bookmanage-vue/src/assets/img/header.png'),
            pwd_Statement: "未通过",
            checked: false
        },
        {
            num: "4",
            pwd_Name: "吴浩然",
            academe: "马克思院",
            account: "20203106142x",
            phone: "18181123456",
            date: "2022-7-21",
            img: require('D:/新建文件夹/文件/开发/bookmanage-vue/src/assets/img/header.png'),
            pwd_Statement: "待处理",
            checked: false
        }
    ],
};
const getters = {

}

//创建store并导出
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})