from django.db import models

# Create your models here.

class Event(models.Model):
    title = models.TextField(verbose_name="Event title", max_length=50)
    date = models.DateField(verbose_name="Date of event")
    start_time = models.TimeField(verbose_name="Start time of the event")
    end_time = models.TimeField(verbose_name="End time of the event")

    def hour_range(self):
        # %I → hora 12h con cero (01, 02...)
        # lstrip("0") → le quita el cero inicial
        return f"{self.start_time.strftime('%I%p').lstrip('0').lower()} - {self.end_time.strftime('%I%p').lstrip('0').lower()}"

    def formatted_date(self):
        # Esto sí es portable en Windows/Linux
        return self.date.strftime("%A, %B %d, %Y")
