from django.db import models

class Contacts(models.Model):
    class Meta:
        db_table = 'contacts'
    name = models.CharField(max_length=255)
    tel = models.CharField(max_length=255)