---
title: Backup and migrate module + Dropbox = peace of mind
date: 2009-11-16 21:06
tags:
  - backup
  - drupal
  - Drupal Planet

comments: true

redirect:
  - blog/2009/11/16/backup-and-migrate-module-plus-dropbox-equals-peace-of-mind/
  - backup-and-migrate-module-dropbox/
---
The [backup and migrate](http://drupal.org/project/backup_migrate) module is truly sweet. We all know that it is a *really* good idea to back up data. But if you are like me - you forgot to do it or just don't do it for some lame reason. So backups should be automated. The backup and migrate module does exactly that - it can be configured to run every X hours if you have cron (and you should have) running on your site.
The module makes a dump of the database and puts it in a folder in the files folder of the site. Even if you use the public [download method](http://drupal.org/node/22240), the security is OK - a .htacces file put in the folder by the backup and migrate module and disallows access to the folder's content.

In the unlikely event that my server goes up in flames, I like to have some backups that are not physically on the same server as the site. I really like Dropbox, so I thought I would figure out a way to use that for the database dumps. I found this very [nice and simple php script](http://jaka.kubje.org/software/dropboxuploader/), that will upload files to your dropbox. I used that to write a super simple php file that my cronjob will call once a day. I settled with having daily backups a week back in time, so the filenames are day names. That way monday's file will be overwritten next monday.

Here is what I did:

1.  Enable the backup migrate module
2.  Go to yoursite.com/admin/content/backup_migrate/export and choose gz under compression, put your sitename in _Backup file name_, and put "D" for dayname under Timestamp format:
![backup migrate](/img/timestamp_append.png)
3.  Download and unzip the latest [Dropbox uploader](http://jaka.kubje.org/software/dropboxuploader/) (I used the 1.1.5 version)
4.  Edit the variables capitalized in the php below and save the it to a file called dropbox_backup.php. Put it next to the Dropbox uploader file. The files should be put somewhere outside the drupal installation.
5.  Put a line that in your crontab that calls the php script. It could look like this one, that will run every night at 1 and report to a log file how it went.
`00 01 * * * php PATH_TO_SCRIPT/dropbox_backup.php >> PATH_TO_SCRIPT/log.txt`
And that's it! Easy backup of your database and easy use of the ample storage space that Dropbox offers.
``` php
<?php
$site_name = 'SITENAME';
$backup_dir = 'WHERE_YOUR_DB_DUMPS_ARE_PUT_BY_BACKUP_MIGRATE';
$todays_filename = sprintf('%s-%s.sql.gz', $site_name, date('D'));

if (file_exists($backup_dir .'/'. $todays_filename)) {
  // Get todays file from where backup_migrate module puts it
  // and drop it in this folder (just to get it out of the "files"
  // folder in Drupal).
  exec("mv $backup_dir/$todays_filename " . dirname($_SERVER['SCRIPT_FILENAME']));

  // And upload todays file to the Dropbox.
  require 'DropboxUploader.php';
  try {
    $uploader = new DropboxUploader('YOUR_EMAIL', 'YOUR_PASSWORD');
    $uploader->upload(dirname($_SERVER['SCRIPT_NAME']) .'/'. $todays_filename, 'FOLDER_IN_DROPBOX');
    echo date('m/d Y') . ": Uploaded $todays_filename to Dropbox\n";
  }
  catch (Exception $e) {
    echo date('m/d Y') . ": I had a problem uploading $todays_filename to Dropbox\n";
  }
}
?>
```
