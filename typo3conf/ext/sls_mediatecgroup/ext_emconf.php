<?php

/**
 * Extension Manager/Repository config file for ext "sls_mediatecgroup".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'SLS Mediatecgroup',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
            'rte_ckeditor' => '8.7.0-9.5.99',
            'bootstrap_package' => '9.1.0-9.1.99',
            'mask' => '8.7.0 -8.7.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'RWorx\\SlsMediatecgroup\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Johannes Regner',
    'author_email' => 'johannes@r-worx.de',
    'author_company' => 'r-worx',
    'version' => '1.0.0',
];
