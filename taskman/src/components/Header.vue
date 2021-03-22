<template>
     <header>
        <div class="nav-wrapper">
            <div class="left-side">
                <h1>TaskMan</h1>
            </div>
            <div class="right-side">
                <ul>
                    <li>User</li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
.nav-wrapper{
    width: 100%;
    padding: 10px;  
    display: flex;
    justify-content: space-between;
    background-color: rgba(255,255,255, .9);
    box-shadow: 1px 1px 10px rgba(0,0,0,.1);
 }

.right-side {
    display: flex;
    align-items: center;
}

.right-side ul {
    list-style: none;
    display: flex;
}

.right-side li {
    text-decoration: none;
    font-weight: 700;
    color: rgba(61,61,61, .87);
    size: 14px;
    padding: 0 15px;
}

.right-side a:hover{
    color: black;
}

.left-side {
    padding: 0 10px;
}

.left-side h1{
    font-size: 28px;
}
</style>