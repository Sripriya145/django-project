# from django.shortcuts import render
# from rest_framework.views import APIView
# from . models import *
# from rest_framework.response import Response
# from . serializer import *
# # Create your views here.


# class ReactView(APIView):

#     serializer_class = ReactSerializer

#     def get(self, request):
#         output = [{"employee": output.employee, "department": output.department}
#                   for output in React.objects.all()]
#         return Response(output)

#     def post(self, request):

#         serializer = ReactSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.files.storage import FileSystemStorage
import csv

class CsvUploadView(APIView):
    def post(self, request, *args, **kwargs):
        file = request.FILES.get('file')
        if not file:
            return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Save the file locally
            fs = FileSystemStorage()
            filename = fs.save(file.name, file)
            file_path = fs.path(filename)

            # Process the CSV file (example: read and print the contents)
            with open(file_path, newline='') as csvfile:
                reader = csv.reader(csvfile)
                for row in reader:
                    print(row)

            return Response({'message': 'File uploaded and processed successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
