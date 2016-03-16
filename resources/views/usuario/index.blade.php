@extends('layouts.admin')
	@include('alerts.success')
	@section('content')
	<div class="users">
		@include('usuario.users')
	</div>
	@endsection

	@section('scripts')
		{!!Html::script('js/script3.js')!!}
	@endsection