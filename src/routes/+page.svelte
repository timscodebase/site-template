<script>
	import { Image, Side_By_Side } from '$lib'
	import * as config from '$lib/config'
</script>

<svelte:head>
	<title>{config.name}</title>
</svelte:head>

<section>
	<Image
		src="https://res.cloudinary.com/tithos/image/upload/q_auto:eco/v1726111943/5_i6bazb.avif"
		alt="Black and White Sunset over crosswalk"
	/>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat laudantium iure libero neque
		impedit culpa porro! Quos nihil ad minima deserunt et dolores nam obcaecati consequuntur
		provident modi nemo molestiae repellat ab earum beatae dolore labore neque vero voluptatibus,
		minus inventore? Soluta possimus libero ut rem blanditiis sed suscipit.
	</p>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id eum illo cumque eius. Dolore
		expedita cupiditate numquam nobis aliquid illo enim? Aliquid, laborum? Debitis quam quas numquam
		eius atque sapiente nihil, dolor odio in doloribus, necessitatibus ratione perferendis placeat
		omnis molestias odit ea? Reiciendis praesentium laborum pariatur aut facere et odit atque in
		voluptatibus at asperiores deserunt, minus magni hic necessitatibus veritatis ullam impedit
		minima enim laboriosam a aspernatur? Dicta, harum placeat? Cupiditate quo, quidem ea in autem
		corporis laborum doloremque corrupti. Odio, nisi totam magni voluptatem unde asperiores,
		blanditiis illum sunt eveniet perspiciatis quis aspernatur dolore laudantium ab eius
		necessitatibus eum dignissimos corporis explicabo voluptate ad nihil cupiditate. Perspiciatis ea
		sint recusandae unde rerum error tempore voluptate architecto?
	</p>
</section>

<Side_By_Side>
	<svelte:fragment slot="left">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro voluptate pariatur
			corporis id aliquam aliquid recusandae at saepe dolores. Molestias eaque corporis explicabo
			perferendis deserunt impedit sint, eligendi, aut magni dignissimos consequatur eius? Impedit!
		</p>
	</svelte:fragment>

	<svelte:fragment slot="right">
		<Image
			src="https://res.cloudinary.com/tithos/image/upload/q_auto:eco/v1704755542/tim-v7/IMG_1343.avif"
			alt="Red, Pink, and White Flowers"
		/>
	</svelte:fragment>
</Side_By_Side>

<Side_By_Side>
	<svelte:fragment slot="right">
		<Image
			src="https://res.cloudinary.com/tithos/image/upload/q_auto:eco/v1704755542/tim-v7/IMG_1343.avif"
			alt="Red, Pink, and White Flowers"
		/>
	</svelte:fragment>

	<svelte:fragment slot="left">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro voluptate pariatur
			corporis id aliquam aliquid recusandae at saepe dolores. Molestias eaque corporis explicabo
			perferendis deserunt impedit sint, eligendi, aut magni dignissimos consequatur eius? Impedit!
		</p>
	</svelte:fragment>
</Side_By_Side>

<section>
	<Image
		src="https://res.cloudinary.com/tithos/image/upload/q_auto:eco/v1726111944/8_y8vag4.avif"
		alt="Black and White Sunset over crosswalk"
	/>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat laudantium iure libero neque
		impedit culpa porro! Quos nihil ad minima deserunt et dolores nam obcaecati consequuntur
		provident modi nemo molestiae repellat ab earum beatae dolore labore neque vero voluptatibus,
		minus inventore? Soluta possimus libero ut rem blanditiis sed suscipit.
	</p>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id eum illo cumque eius. Dolore
		expedita cupiditate numquam nobis aliquid illo enim? Aliquid, laborum? Debitis quam quas numquam
		eius atque sapiente nihil, dolor odio in doloribus, necessitatibus ratione perferendis placeat
		omnis molestias odit ea? Reiciendis praesentium laborum pariatur aut facere et odit atque in
		voluptatibus at asperiores deserunt, minus magni hic necessitatibus veritatis ullam impedit
		minima enim laboriosam a aspernatur? Dicta, harum placeat? Cupiditate quo, quidem ea in autem
		corporis laborum doloremque corrupti. Odio, nisi totam magni voluptatem unde asperiores,
		blanditiis illum sunt eveniet perspiciatis quis aspernatur dolore laudantium ab eius
		necessitatibus eum dignissimos corporis explicabo voluptate ad nihil cupiditate. Perspiciatis ea
		sint recusandae unde rerum error tempore voluptate architecto?
	</p>
</section>
