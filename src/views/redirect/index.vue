<template>
  <div class="redirect-contianer"></div>
</template>

<script lang="ts" setup name="Redirect" >
const route = useRoute();
const router = useRouter();
const { params, query } = route;
const { path } = params;
router.replace({
  path: "/" + (typeof path === "string" ? path : path.join("/")),
  query,
});
</script>
