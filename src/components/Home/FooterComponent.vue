<template>
    <footer id="footer" class="wrapper style1-alt">
        <div class="inner">
            <ul class="menu">
                <li>&copy; {{ footerText }}</li>
                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                <li><a href="https://vuejs.org/">Built with Vue.js</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            footerText: 'Joaquín Ayala. All Rights Reserved.',
        }
    }
}
</script>