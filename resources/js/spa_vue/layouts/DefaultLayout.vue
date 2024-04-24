<template>
    <div>
        <header>
            <nav>
                <ul>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                </ul>
            </nav>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup></script>
