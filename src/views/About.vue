<template>
  <div class="container">
    <div>
      <div class="above" id='above1'>Optimization > Rightsizing</div>
      <div class="above" id='above2'>
        <div>Rightsizing</div>
        <div>FinOps Guide</div>
      </div>
      <div class="above" id="above3">
        <div>
          <div>Current View</div>
          <div>
            <select>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
            </select>
          </div>
          <div>
            Cloud:
            <div><button>Icon 1</button></div>
            <div><button>Icon 2</button></div>
            <div><button>Icon 3</button></div>
          </div>
          <button>Some text in here</button>
          <div>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
        <div>
          <div>Subtitle here</div>
          <div>
            <select>
              <option>AWS service 1</option>
              <option>AWS service 2</option>
              <option>AWS service 3</option>
            </select>
            <button>Button here</button>
          </div>
          <div>
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
<style lang="scss" scoped>
 .container {
   width: 80%;
   max-width: 1000px;
 }
 .above {
   display: flex;
   flex-direction: row;

   div {
     display: flex;
     flex-direction: row;
   }
 }
</style>