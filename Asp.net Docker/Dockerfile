FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["myaspnetapp.csproj", ""]
RUN dotnet restore "./myaspnetapp.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "myaspnetapp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "myaspnetapp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "myaspnetapp.dll"]


