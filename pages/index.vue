<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
import fs from 'fs-extra'

export default {
  data: () => {
    return { name: 'world' }
  }
}
</script>