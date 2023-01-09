<template>
  <div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                
                <h4 class="modal-title" id="myModalLabel">Confirmation</h4>
            </div>

            <div class="modal-body">
                <p>Delete confirmation message</p>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <a id="delete_link" class="btn btn-danger btn-ok">Delete</a>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>