<template>
  <div>
    TimeEntries
    <router-view />
    <div class="time-entries">
      <p v-if="!plans.length">
        <strong>还没有任何计划</strong>
      </p>
      <div class="list-group">
        <a v-for="(plan, index) in plans"
         class="list-group-item"
         :key="index">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="plan.avatar" alt="" class="avatar img-circle img-responsive">
              <p class="text-center">
                <strong>
                  {{ plan.name }}
                </strong>
              </p>
            </div>
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ plan.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
            </div>
            <div class="col-sm-7 comment-section">
              <p>{{ plan.comment }}</p>
            </div>
            <div class="col-sm-1">
              <button class="btn btn-xs btn-danger delete-button" @click="deletePlan(index)">
              x</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'TimeEntries',
    computed: {
        plans () {
            return this.$store.state.list
        }
    },
    methods: {
        deletePlan (idx) {

        }
    }
}
</script>
<style>
.avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
