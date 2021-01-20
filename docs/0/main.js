window.addEventListener('load', (event) => {
    const ConditionalRendering = {
        setup() {
            const seen = Vue.ref(true);
            const toggleSeen = () => { seen.value = !seen.value; }
            return {
                seen,
                toggleSeen,
            };
        }
    };
    Vue.createApp(ConditionalRendering).mount('#conditional-rendering');
});
