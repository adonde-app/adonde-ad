<template>
    <div class="contaienr">
    <form action="http://localhost:3000/ad/create" method="POST">
        <label>회사이름: </label>
        <input type="comp_name" name='comp_name' required v-model="comp_name">

        <label>이메일: </label>
        <input type="email" name='comp_email' required v-model="email">

        <label>품목: </label>
        <input type="subject" name='subject' required v-model="subject">

        <label>제품명: </label>
        <input type="product_name" name='name' required v-model="product_name">

        <label>내용: </label>
        <input type="description" name="description" required v-model="description">

        <label for="img">이미지:</label>
        <input type="file" id="img" name="img" accept="image/*">

        <label>링크: </label>
        <input type="link" name='url' required v-model="link">

        <input type="hidden" name="userID" :value=this.user_id />

        <div class="submit for-submit">
            <button>Submit</button>
        </div>
    </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            comp_name: '',
            email: '',
            subject: '',
            product_name: '',
            description: '',
            link: '',
            user_id: localStorage.getItem('user_id'),
        }
    }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content:center;
}
form{
    max-width: 700px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 10px 0 15px;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select{
    display: block;
    padding: 5px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.for-submit{
    display:flex;
    justify-content: center;
}
button{
    color:white;
    margin-top: 40px;
    padding: 5px 15px;
    background-color:rgb(25, 169, 25);
    border: 1px none;
    border-radius: 10px;
    box-shadow: 4px 2px 10px gray;
}
button:hover{
    opacity: 0.8;
}
button:active{
    opacity: 0.6;
}
</style>
