from django.db import models

# Create your models here.

class Event(models.Model):
    title = models.TextField(verbose_name="Event title", max_length=50)
    date = models.DateField(verbose_name="Date of event")
    start_time = models.TimeField(verbose_name="Start time of the event")
    end_time = models.TimeField(verbose_name="End time of the event")

    def hour_range(self):
        return f"{self.start_time.strftime('%-I%p').lower()} - {self.end_time.strftime('%-I%p').lower}"
    
    def formatted_date(self):
        return f"{self.date.strftime('%A, %B %d, %Y')}"