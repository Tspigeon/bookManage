//该文件用于创建store
//引入vue
import Vue from "vue";
//引入vuex
import Vuex from "vuex";
//使用vuex，vuex的使用一定要在store创建之前
Vue.use(Vuex)


//响应组件中的动作
const actions = {
    srh(context, subarr) {
        context.commit('SRH', subarr)
    },
    ex_Srh(context, subarr) {
        context.commit('EX_Srh', subarr)
    },
}
//操作数据
const mutations = {
    //筛选函数
    SRH(state, subarr) {
        state.bookData = subarr
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
    },
    EX_Srh(state, subarr) {
        state.bookData = subarr
        state.name = ''
        state.bookName = ''
        state.period = ''
        state.statment = ''
    }
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

    //filterMid组件的数据
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
    ]
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