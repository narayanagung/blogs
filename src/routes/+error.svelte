<script lang="ts">
	import { page } from "$app/stores";
</script>

<div class="error">
	<h1><span>{$page.status}</span> {$page.error?.message}</h1>
	<img
		src="https://lh3.googleusercontent.com/pw/AIL4fc8U17dpk6L112y-mj8EJrgrx5KhyhAAxt0UB-FegOzMgzqQRYzONYELDjkZ6Eau6ZazEHRr2puc2_g2oIpC_2fsI4yoIlTWKhvLfIvXKEGtZdWReoQ=w2400"
		alt="yui stare with shock"
	/>
	<p>Halaman yang anda tuju <span>tidak ditemukan</span></p>
</div>

<style>
	.error {
		display: grid;
		place-content: center;
		text-align: center;
		gap: 2rem 0;
		padding: 2rem;
	}

	p {
		font-size: 2rem;
	}

	@media screen and (max-width: 700px) {
		h1 {
			font-size: 1.5rem;
			line-height: 2rem;
		}
		p {
			font-size: 1rem;
			line-height: 1.5rem;
		}
	}

	span {
		color: red;
	}

	img {
		width: 100%;
		display: block;
	}
</style>
