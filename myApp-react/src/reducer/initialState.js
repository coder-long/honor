/* 初始静态数据，初始请求过来的数据 */

//静态数据
export let initialState = {
    hel: {
        id: 'hl001',
        name: '何龙',
        age: '24',
        height: '170',
        address: '四川绵阳',
        girlFriend: '陈春梅',
        girlFriendMsg: {},
        girlFriendId: 'ccm001'
    },
    ccm: {
        id: 'ccm001',
        name: '陈春梅',
        age: '23',
        height: '158',
        address: '四川泸州',
        boyFriendId: '何龙',
        boyFriendMsg: {},
        frendId: 'hl001',
    }

};

//请求到的数据
export let initFetchState = {
    a: {
        isFetching: false,
        data: {}
    }
};