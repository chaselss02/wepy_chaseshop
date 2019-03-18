export default {
    phone(value) {
        let flag = /^1[34578]\d{9}$/.test(value);
        return flag;
    }
}