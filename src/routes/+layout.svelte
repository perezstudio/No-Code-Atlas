<script>
  import "../app.css";
  
  let mobileMenu = false;

  function toggleMobileMenu() {
    mobileMenu = !mobileMenu;
  }
</script>

<nav class="container mx-auto flex flex-col md:flex-row grow justify-between md:items-center px-4 py-4">
  <div class="flex flex-row justify-between">
    <img src="no-code-atlas-logo.svg" alt="Logo" class="h-6">
    <img src="Menu Icon.svg" alt="Menu Button" class="md:hidden" on:click={toggleMobileMenu}>
  </div>
  <ul class="hidden md:flex md:flex-row">
    <a href="#"><li class="p-4 rounded-lg text-center">Tools</li></a>
    <a href="#"><li class="p-4 rounded-lg text-center">Solutions</li></a>
    <a href="#"><li class="p-4 rounded-lg text-center">Learn</li></a>
    <a href="#"><li class="p-4 rounded-lg text-center">Resources</li></a>
  </ul>
  <uL class="hidden md:flex md:flex-row md:gap-1">
    <a href="#"><li class="bg-lime-200 text-lime-900 p-4 rounded-lg text-center">Sign In</li></a>
    <a href="#"><li class="bg-slate-200 text-slate-900 p-4 rounded-lg text-center">Sign Up</li></a>
  </uL>
  {#if mobileMenu}
  <ul class="flex flex-col gap-2 py-4 md:hidden">
    <a href="#"><li class="p-4 rounded-lg text-center">Tools</li></a>
    <a href="#"><li class="p-4 rounded-lg text-center">Solutions</li></a>
    <a href="#"><li class="p-4 rounded-lg text-center">Learn</li></a>
    <a href="#"><li class="p-4 rounded-lg text-center">Resources</li></a>
  </ul>
  <uL class="flex flex-col gap-2 py-4 md:hidden">
    <a href="#"><li class="bg-lime-200 p-4 text-lime-900 rounded-lg text-center">Sign In</li></a>
    <a href="#"><li class="bg-slate-200 p-4 text-slate-900 rounded-lg text-center">Sign Up</li></a>
  </uL>
  {/if}
</nav>

<slot />