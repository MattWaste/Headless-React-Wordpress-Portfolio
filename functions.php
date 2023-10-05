<?php

function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

// added 10/5/23

add_action('init', function(){
	register_post_type('Form Submission',[
		'public' => true,
		'label' => 'Form Submission (Contact Page)',
		'show_in_graphql' => true,
		'graphql_single_name' => 'formSubmission',
		'graphql_plural_name' => 'formSubmissions',
	]);
});





// added 9/25/23  https://www.youtube.com/watch?v=ZRQ94PMNEcg

// add_action('graphql_register_types', function () {

// 	register_graphql_mutation('createSubmission', [
// 		'inputFields' => [
// 			'email' => [
// 				'type' => 'String',
// 				'description' => 'User email',
// 			],
// 			'subject' => [
// 				'type' => 'String',
// 				'description' => 'subject of message',
// 			],
// 			'message' => [
// 				'type' => 'String',
// 				'description' => 'body of message',
// 			],
// 			'sendCopy' => [
// 				'type' => 'Boolean',
// 				'description' => ' send user copy',
// 			],
// 		],
// 		'outputFields' => [
// 			'success' => [
// 				'type' => 'Boolean',
// 				'description' => 'Whether or not data was stored successfully',
// 				'resolve' => function ($payload, $args, $context, $info) {
// 					return isset($payload['success']) ? $payload['success'] : null;
// 				}
// 			],
// 			'data' => [
// 				'type' => 'String',
// 				'description' => 'Payload of submitted fields',
// 				'resolve' => function ($payload, $args, $context, $info) {
// 					return isset($payload['data']) ? $payload['data'] : null;
// 				}
// 			]
// 		],
// 		'mutateAndGetPayload' => function ($input, $context, $info) {

// 			if (!class_exists('ACF')) return [
// 				'success' => false,
// 				'data' => 'ACF is not installed'
// 			];

// 			$sanitized_data = [];
// 			$errors = [];
// 			$acceptable_fields = [
// 				'email' => 'field_5db38290cbb0d',
// 				'subject' => 'field_5db3829bcbb0e',
// 				'message' => 'field_5db38343d47fe',
// 				'sendCopy' => 'field_5db382a7cbb0f',
// 			];

// 			foreach ($acceptable_fields as $field_key => $acf_key) {
// 				if (!empty($input[$field_key])) {
// 					$sanitized_data[$field_key] = sanitize_text_field($input[$field_key]);
// 				} else {
// 					$errors[] = $field_key . ' was not filled out.';
// 				}
// 			}

// 			if (!empty($errors)) return [
// 				'success' => false,
// 				'data' => $errors
// 			];

// 			$form_submission = wp_insert_post([
// 				'post_type' => 'form_submission',
// 				'post_title' => $sanitized_data['firstName'] . ' ' . $sanitized_data['lastName'],
// 			], true);

// 			if (is_wp_error($form_submission)) return [
// 				'success' => false,
// 				'data' => $form_submission->get_error_message()
// 			];

// 			foreach ($acceptable_fields as $field_key => $acf_key) {
// 				update_field($acf_key, $sanitized_data[$field_key], $form_submission);
// 			}

// 			return [
// 				'success' => true,
// 				'data' => json_encode($sanitized_data)
// 			];

// 		}
// 	]);

// });