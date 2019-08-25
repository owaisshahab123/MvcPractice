using DAL.DBEntities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class Entity_Common
{
    public Entity_Common()
    {
        //
        // TODO: Add constructor logic here
        //
    }


    public static DataTable get_SP_DataTable(string context, string sp_Name)
    {
        return get_SP_DataTable(context, sp_Name, null);
    }
    public static DataTable get_SP_DataTable(MvcPracticeEntities context, string sp_Name)
    {
        return get_SP_DataTable(context, sp_Name, null);
    }
    public static DataTable get_DataTable(MvcPracticeEntities context, string sp_Name)
    {
        return get_DataTable(context, sp_Name, null);
    }
    public static DataTable get_DataTable(MvcPracticeEntities context, string Query, SqlParameter[] param)
    {
        DataTable dt = new DataTable();
        var conn = context.Database.Connection;
        var connectionState = conn.State;
        try
        {

            {
                if (connectionState != ConnectionState.Open)
                    conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = Query;
                    cmd.CommandType = CommandType.Text;

                    if (param != null)
                        foreach (var item in param)
                        {
                            cmd.Parameters.Add(item);
                        }

                    using (var reader = cmd.ExecuteReader())
                    {
                        dt.Load(reader);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (connectionState != ConnectionState.Open)
                conn.Close();
        }
        return dt;
    }

    public static DataTable get_QueryDataTable(MvcPracticeEntities context, string Query)
    {
        DataTable dt = new DataTable();
        var conn = context.Database.Connection;
        var connectionState = conn.State;
        try
        {

            {
                if (connectionState != ConnectionState.Open)
                    conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = Query;
                    cmd.CommandType = CommandType.Text;

                    using (var reader = cmd.ExecuteReader())
                    {
                        dt.Load(reader);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (connectionState != ConnectionState.Open)
                conn.Close();
        }
        return dt;
    }
    public static DataTable get_SP_DataTable(MvcPracticeEntities context, string sp_Name, SqlParameter[] param)
    {
        DataTable dt = new DataTable();
        var conn = context.Database.Connection;
        var connectionState = conn.State;
        try
        {

            {
                if (connectionState != ConnectionState.Open)
                    conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = sp_Name;
                    cmd.CommandType = CommandType.StoredProcedure;

                    if (param != null)
                        foreach (var item in param)
                        {
                            cmd.Parameters.Add(item);
                        }

                    using (var reader = cmd.ExecuteReader())
                    {
                        dt.Load(reader);
                    }
                    cmd.Parameters.Clear();
                }
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (connectionState != ConnectionState.Open)
                conn.Close();
        }
        return dt;
    }
    public static string get_Scalar(MvcPracticeEntities context, string sp_Name, SqlParameter[] param)
    {
        object Value = null;
        var conn = context.Database.Connection;
        var connectionState = conn.State;
        try
        {

            {
                if (connectionState != ConnectionState.Open)
                    conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = sp_Name;
                    cmd.CommandType = CommandType.StoredProcedure;

                    if (param != null)
                        foreach (var item in param)
                        {
                            cmd.Parameters.Add(item);
                        }

                    //Value = cmd.ExecuteScalar();
                    Value = cmd.ExecuteNonQuery();
                }
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (connectionState != ConnectionState.Open)
                conn.Close();
        }
        return Convert.ToString(Value);
    }

    public static int ExecuteNonQuery(MvcPracticeEntities context, string sp_Name, SqlParameter[] param)
    {
        int count = 0;
        var conn = context.Database.Connection;
        var connectionState = conn.State;
        try
        {
            if (connectionState != ConnectionState.Open)
                conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = sp_Name;
                cmd.CommandType = CommandType.StoredProcedure;

                if (param != null)
                    foreach (var item in param)
                    {
                        cmd.Parameters.Add(item);
                    }

                count = cmd.ExecuteNonQuery();
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (connectionState != ConnectionState.Open)
                conn.Close();
        }

        return count;

    }

    public static void ExecuteSql(MvcPracticeEntities context, string sql)
    {


        var conn = context.Database.Connection;
        var connectionState = conn.State;
        try
        {

            {
                if (connectionState != ConnectionState.Open)
                    conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = sql;
                    cmd.ExecuteReader();
                }
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (connectionState != ConnectionState.Open)
                conn.Close();
        }
    }
    public static void ExecuteSql(SqlConnection context, string Command, SqlParameter[] param)
    {


        var conn = context;
        var connectionState = conn.State;
        try
        {

            {
                if (connectionState != ConnectionState.Open)
                    conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = Command;
                    cmd.CommandTimeout = 60;
                    cmd.CommandType = CommandType.StoredProcedure;
                    if (param != null)
                        foreach (var item in param)
                        {
                            cmd.Parameters.Add(item);
                        }
                    cmd.ExecuteNonQuery();
                }
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (connectionState != ConnectionState.Open)
                conn.Close();
        }
    }
    public static DataTable get_SP_DataTable(string ConnectionString, string sp_Name, SqlParameter[] param)
    {
        DataTable dt = new DataTable();

        SqlConnection conn = new SqlConnection(ConnectionString);
        var connectionState = conn.State;
        try
        {

            {
                if (connectionState != ConnectionState.Open)
                    conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = sp_Name;
                    cmd.CommandType = CommandType.StoredProcedure;

                    if (param != null)
                        foreach (var item in param)
                        {
                            cmd.Parameters.Add(item);
                        }

                    using (var reader = cmd.ExecuteReader())
                    {
                        dt.Load(reader);
                    }
                    cmd.Parameters.Clear();
                }
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (connectionState != ConnectionState.Open)
                conn.Close();
        }
        return dt;
    }

    public static DataTable get_SP_DataTable_WithoutParam(string ConnectionString, string sp_Name)
    {
        DataTable dt = new DataTable();
        SqlConnection conn = new SqlConnection(ConnectionString);
        var connectionState = conn.State;
        try
        {
            {
                if (connectionState != ConnectionState.Open)
                    conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = sp_Name;
                    cmd.CommandType = CommandType.StoredProcedure;

                    using (var reader = cmd.ExecuteReader())
                    {
                        dt.Load(reader);
                    }
                    cmd.Parameters.Clear();
                }
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (connectionState != ConnectionState.Open)
                conn.Close();
        }
        return dt;
    }

}