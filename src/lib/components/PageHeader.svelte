<script>
	const logoText = 'Art gallery';
	const colors = [
		'orangered',
		'chartreuse',
		'aqua',
		'orange',
		'pink',
		'cyan',
		'yellow',
		'antiquewhite'
	];
</script>

<header>
	<a class="logo" href="/" aria-label="Go to the home page">
		{#each logoText.split('') as letter, index}
			<span style="--index: {index}; --hover-color: {colors[index % colors.length]}">{letter}</span>
		{/each}
	</a>

	<nav class="links">
		<ul>
			<li><a href="/">Artworks</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		justify-content: space-between;
		padding: 16px 24px;
		background-color: #333;
	}

	.links {
		& > ul {
			margin: 0;
			padding: 0;
			list-style-type: none;
			display: flex;
			display: flex;
			gap: 10px;
			align-items: center;
		}

		& a {
			color: white;
			text-decoration: none;
		}
	}

	.logo {
		font-size: 1.5rem;
		color: white;
		text-decoration: none;
		max-width: max-content;

		&:hover > span {
			animation: jump 0.3s ease-out forwards;
			animation-delay: calc(var(--index) * 0.02s);
		}

		& > span {
			display: inline-block;
			transition: color ease-out 0.2s;
		}
	}

	@keyframes jump {
		0%,
		100% {
			transform: translateY(0);
			color: var(--hover-color);
		}
		50% {
			transform: translateY(-5px);
			color: var(--hover-color);
		}
	}
</style>
