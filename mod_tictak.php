<?php
    // no direct access 
    defined('_JEXEC') or die;

    $widthField	    = htmlspecialchars($params->get('widthField'));
    $heightField	= htmlspecialchars($params->get('heightField'));
    $countVic       = htmlspecialchars($params->get('countVic'));
    $doc = & JFactory::getDocument();
    $doc->addScript("modules/mod_tictak/js/custom.js");
    $doc->addStyleSheet("/modules/mod_tictak/css/default.css");

   require JModuleHelper::getLayoutPath('mod_tictak', $params->get('layout', 'default'));
?>