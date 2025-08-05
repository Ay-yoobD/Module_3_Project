<template>
    <head>
        <header class="header">
            <div class="introText">
                Select an option:
            </div>

            <div class="center-container">
                <nav class="nav-links">
                    <a href="#" >
                        Featured
                    </a>

                    <a href="/women">
                        Women
                    </a>

                    <a href="/men">
                        Men
                    </a>

                    <a href="/youth">
                        Youth(17-1)
                    </a>

                    <a href="/accessories">
                        Accessories
                    </a>
                </nav>

            </div>

        </header>

    <h1>
        
    </h1>

    </head>


    <main>

    </main>

</template>

<script>

</script>

<style>
.header {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #111;
    padding: 0 2rem;
    
}

.introText {
    position: absolute;
    left: 2rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
}

.center-container {
    flex: 1;
    display: flex;
    justify-content: center;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-weight: 500;
}
</style>