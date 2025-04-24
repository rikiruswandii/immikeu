<div>
    <input type="checkbox" id="theme-toggle" />
    <label for="theme-toggle"></label>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    #theme-toggle {
        @apply invisible;
    }

    #theme-toggle + label {
        @apply inline-block cursor-pointer h-6 w-6 absolute top-6 right-24 rounded-full duration-300 content-[''];
    }

    #theme-toggle:not(:checked) + label {
        @apply bg-amber-400;
    }

    #theme-toggle:checked + label {
        @apply bg-transparent;
        box-shadow: inset -6px -10px 1px 1px #ddd;
    }
</style>