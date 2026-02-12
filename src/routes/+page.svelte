<script lang="ts">
	import logo from '$lib/assets/favicon.svg';
	import subscribeForm from '$lib/assets/subscribe-form.html?raw';
</script>

<div class="flex items-center justify-center h-screen">
	<div class="grid place-items-center">
		<img class="logo" src={logo} alt="pokestockwuphf" />
		<h1 class="text-5xl font-bold m-3">pokestockwuphf</h1>
		<div class="h-1 w-15 bg-gray-300 rounded-full m-3"></div>
		<p class="text-xl m-3 font-bold">
			Find your chase cards faster with coverage across 100+ UK TCG shops!
		</p>
		<p class="text-xl m-3 font-bold">Never miss a beat (or a box) with instant stock alerts!</p>
		<div class="h-1 w-15 bg-gray-300 rounded-full m-3"></div>
		<p class="text-xl m-3 italic">Comming Soon to a Discord Server near you...</p>
		<div class="h-1 w-15 bg-gray-300 rounded-full mt-3"></div>
		{@html subscribeForm}
	</div>
</div>
