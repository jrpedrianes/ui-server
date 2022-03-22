// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: temporal/api/enums/v1/workflow.proto

package enums

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	math "math"
	strconv "strconv"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// Defines how new runs of a workflow with a particular ID may or may not be allowed. Note that
// it is *never* valid to have two actively running instances of the same workflow id.
type WorkflowIdReusePolicy int32

const (
	WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED WorkflowIdReusePolicy = 0
	// Allow starting a workflow execution using the same workflow id.
	WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE WorkflowIdReusePolicy = 1
	// Allow starting a workflow execution using the same workflow id, only when the last
	// execution's final state is one of [terminated, cancelled, timed out, failed].
	WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY WorkflowIdReusePolicy = 2
	// Do not permit re-use of the workflow id for this workflow. Future start workflow requests
	// could potentially change the policy, allowing re-use of the workflow id.
	WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE WorkflowIdReusePolicy = 3
)

var WorkflowIdReusePolicy_name = map[int32]string{
	0: "Unspecified",
	1: "AllowDuplicate",
	2: "AllowDuplicateFailedOnly",
	3: "RejectDuplicate",
}

var WorkflowIdReusePolicy_value = map[string]int32{
	"Unspecified":              0,
	"AllowDuplicate":           1,
	"AllowDuplicateFailedOnly": 2,
	"RejectDuplicate":          3,
}

func (WorkflowIdReusePolicy) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{0}
}

// Defines how child workflows will react to their parent completing
type ParentClosePolicy int32

const (
	PARENT_CLOSE_POLICY_UNSPECIFIED ParentClosePolicy = 0
	// The child workflow will also terminate
	PARENT_CLOSE_POLICY_TERMINATE ParentClosePolicy = 1
	// The child workflow will do nothing
	PARENT_CLOSE_POLICY_ABANDON ParentClosePolicy = 2
	// Cancellation will be requested of the child workflow
	PARENT_CLOSE_POLICY_REQUEST_CANCEL ParentClosePolicy = 3
)

var ParentClosePolicy_name = map[int32]string{
	0: "Unspecified",
	1: "Terminate",
	2: "Abandon",
	3: "RequestCancel",
}

var ParentClosePolicy_value = map[string]int32{
	"Unspecified":   0,
	"Terminate":     1,
	"Abandon":       2,
	"RequestCancel": 3,
}

func (ParentClosePolicy) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{1}
}

type ContinueAsNewInitiator int32

const (
	CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED ContinueAsNewInitiator = 0
	// The workflow itself requested to continue as new
	CONTINUE_AS_NEW_INITIATOR_WORKFLOW ContinueAsNewInitiator = 1
	// The workflow continued as new because it is retrying
	CONTINUE_AS_NEW_INITIATOR_RETRY ContinueAsNewInitiator = 2
	// The workflow continued as new because cron has triggered a new execution
	CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE ContinueAsNewInitiator = 3
)

var ContinueAsNewInitiator_name = map[int32]string{
	0: "Unspecified",
	1: "Workflow",
	2: "Retry",
	3: "CronSchedule",
}

var ContinueAsNewInitiator_value = map[string]int32{
	"Unspecified":  0,
	"Workflow":     1,
	"Retry":        2,
	"CronSchedule": 3,
}

func (ContinueAsNewInitiator) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{2}
}

// (-- api-linter: core::0216::synonyms=disabled
//     aip.dev/not-precedent: There is WorkflowExecutionState already in another package. --)
type WorkflowExecutionStatus int32

const (
	WORKFLOW_EXECUTION_STATUS_UNSPECIFIED WorkflowExecutionStatus = 0
	// Value 1 is hardcoded in SQL persistence.
	WORKFLOW_EXECUTION_STATUS_RUNNING          WorkflowExecutionStatus = 1
	WORKFLOW_EXECUTION_STATUS_COMPLETED        WorkflowExecutionStatus = 2
	WORKFLOW_EXECUTION_STATUS_FAILED           WorkflowExecutionStatus = 3
	WORKFLOW_EXECUTION_STATUS_CANCELED         WorkflowExecutionStatus = 4
	WORKFLOW_EXECUTION_STATUS_TERMINATED       WorkflowExecutionStatus = 5
	WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW WorkflowExecutionStatus = 6
	WORKFLOW_EXECUTION_STATUS_TIMED_OUT        WorkflowExecutionStatus = 7
)

var WorkflowExecutionStatus_name = map[int32]string{
	0: "Unspecified",
	1: "Running",
	2: "Completed",
	3: "Failed",
	4: "Canceled",
	5: "Terminated",
	6: "ContinuedAsNew",
	7: "TimedOut",
}

var WorkflowExecutionStatus_value = map[string]int32{
	"Unspecified":    0,
	"Running":        1,
	"Completed":      2,
	"Failed":         3,
	"Canceled":       4,
	"Terminated":     5,
	"ContinuedAsNew": 6,
	"TimedOut":       7,
}

func (WorkflowExecutionStatus) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{3}
}

type PendingActivityState int32

const (
	PENDING_ACTIVITY_STATE_UNSPECIFIED      PendingActivityState = 0
	PENDING_ACTIVITY_STATE_SCHEDULED        PendingActivityState = 1
	PENDING_ACTIVITY_STATE_STARTED          PendingActivityState = 2
	PENDING_ACTIVITY_STATE_CANCEL_REQUESTED PendingActivityState = 3
)

var PendingActivityState_name = map[int32]string{
	0: "Unspecified",
	1: "Scheduled",
	2: "Started",
	3: "CancelRequested",
}

var PendingActivityState_value = map[string]int32{
	"Unspecified":     0,
	"Scheduled":       1,
	"Started":         2,
	"CancelRequested": 3,
}

func (PendingActivityState) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{4}
}

type PendingWorkflowTaskState int32

const (
	PENDING_WORKFLOW_TASK_STATE_UNSPECIFIED PendingWorkflowTaskState = 0
	PENDING_WORKFLOW_TASK_STATE_SCHEDULED   PendingWorkflowTaskState = 1
	PENDING_WORKFLOW_TASK_STATE_STARTED     PendingWorkflowTaskState = 2
)

var PendingWorkflowTaskState_name = map[int32]string{
	0: "Unspecified",
	1: "Scheduled",
	2: "Started",
}

var PendingWorkflowTaskState_value = map[string]int32{
	"Unspecified": 0,
	"Scheduled":   1,
	"Started":     2,
}

func (PendingWorkflowTaskState) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{5}
}

type HistoryEventFilterType int32

const (
	HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED HistoryEventFilterType = 0
	HISTORY_EVENT_FILTER_TYPE_ALL_EVENT   HistoryEventFilterType = 1
	HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT HistoryEventFilterType = 2
)

var HistoryEventFilterType_name = map[int32]string{
	0: "Unspecified",
	1: "AllEvent",
	2: "CloseEvent",
}

var HistoryEventFilterType_value = map[string]int32{
	"Unspecified": 0,
	"AllEvent":    1,
	"CloseEvent":  2,
}

func (HistoryEventFilterType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{6}
}

type RetryState int32

const (
	RETRY_STATE_UNSPECIFIED              RetryState = 0
	RETRY_STATE_IN_PROGRESS              RetryState = 1
	RETRY_STATE_NON_RETRYABLE_FAILURE    RetryState = 2
	RETRY_STATE_TIMEOUT                  RetryState = 3
	RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED RetryState = 4
	RETRY_STATE_RETRY_POLICY_NOT_SET     RetryState = 5
	RETRY_STATE_INTERNAL_SERVER_ERROR    RetryState = 6
	RETRY_STATE_CANCEL_REQUESTED         RetryState = 7
)

var RetryState_name = map[int32]string{
	0: "Unspecified",
	1: "InProgress",
	2: "NonRetryableFailure",
	3: "Timeout",
	4: "MaximumAttemptsReached",
	5: "RetryPolicyNotSet",
	6: "InternalServerError",
	7: "CancelRequested",
}

var RetryState_value = map[string]int32{
	"Unspecified":            0,
	"InProgress":             1,
	"NonRetryableFailure":    2,
	"Timeout":                3,
	"MaximumAttemptsReached": 4,
	"RetryPolicyNotSet":      5,
	"InternalServerError":    6,
	"CancelRequested":        7,
}

func (RetryState) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{7}
}

type TimeoutType int32

const (
	TIMEOUT_TYPE_UNSPECIFIED       TimeoutType = 0
	TIMEOUT_TYPE_START_TO_CLOSE    TimeoutType = 1
	TIMEOUT_TYPE_SCHEDULE_TO_START TimeoutType = 2
	TIMEOUT_TYPE_SCHEDULE_TO_CLOSE TimeoutType = 3
	TIMEOUT_TYPE_HEARTBEAT         TimeoutType = 4
)

var TimeoutType_name = map[int32]string{
	0: "Unspecified",
	1: "StartToClose",
	2: "ScheduleToStart",
	3: "ScheduleToClose",
	4: "Heartbeat",
}

var TimeoutType_value = map[string]int32{
	"Unspecified":     0,
	"StartToClose":    1,
	"ScheduleToStart": 2,
	"ScheduleToClose": 3,
	"Heartbeat":       4,
}

func (TimeoutType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{8}
}

func init() {
	proto.RegisterEnum("temporal.api.enums.v1.WorkflowIdReusePolicy", WorkflowIdReusePolicy_name, WorkflowIdReusePolicy_value)
	proto.RegisterEnum("temporal.api.enums.v1.ParentClosePolicy", ParentClosePolicy_name, ParentClosePolicy_value)
	proto.RegisterEnum("temporal.api.enums.v1.ContinueAsNewInitiator", ContinueAsNewInitiator_name, ContinueAsNewInitiator_value)
	proto.RegisterEnum("temporal.api.enums.v1.WorkflowExecutionStatus", WorkflowExecutionStatus_name, WorkflowExecutionStatus_value)
	proto.RegisterEnum("temporal.api.enums.v1.PendingActivityState", PendingActivityState_name, PendingActivityState_value)
	proto.RegisterEnum("temporal.api.enums.v1.PendingWorkflowTaskState", PendingWorkflowTaskState_name, PendingWorkflowTaskState_value)
	proto.RegisterEnum("temporal.api.enums.v1.HistoryEventFilterType", HistoryEventFilterType_name, HistoryEventFilterType_value)
	proto.RegisterEnum("temporal.api.enums.v1.RetryState", RetryState_name, RetryState_value)
	proto.RegisterEnum("temporal.api.enums.v1.TimeoutType", TimeoutType_name, TimeoutType_value)
}

func init() {
	proto.RegisterFile("temporal/api/enums/v1/workflow.proto", fileDescriptor_939fa9511cc117f0)
}

var fileDescriptor_939fa9511cc117f0 = []byte{
	// 953 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x96, 0xbf, 0x6f, 0xe4, 0x44,
	0x14, 0xc7, 0x77, 0x9c, 0x5c, 0x4e, 0x1a, 0x84, 0x34, 0x18, 0xf2, 0x43, 0xe4, 0x70, 0x7e, 0x5f,
	0x2e, 0x7b, 0xb0, 0x51, 0x04, 0x05, 0x5a, 0xaa, 0x89, 0xfd, 0x92, 0x0c, 0xe7, 0x1d, 0x9b, 0xf1,
	0x38, 0xb9, 0xd0, 0x8c, 0x96, 0x9c, 0x39, 0x59, 0x97, 0xac, 0x57, 0xbb, 0xde, 0x84, 0x74, 0xfc,
	0x09, 0x74, 0x14, 0x14, 0x34, 0x14, 0x88, 0x8a, 0xe6, 0x4a, 0x7a, 0xca, 0x94, 0x29, 0xc9, 0x46,
	0x48, 0x88, 0xea, 0xfe, 0x04, 0x34, 0xf6, 0x3a, 0xda, 0xec, 0xad, 0x57, 0x74, 0xd6, 0xcc, 0x67,
	0x9e, 0xdf, 0xfb, 0xbe, 0xef, 0x1b, 0x1b, 0xaf, 0xa7, 0xd1, 0x59, 0x3b, 0xe9, 0x34, 0x4f, 0xb7,
	0x9b, 0xed, 0x78, 0x3b, 0x6a, 0xf5, 0xce, 0xba, 0xdb, 0xe7, 0x3b, 0xdb, 0x17, 0x49, 0xe7, 0xd5,
	0xb7, 0xa7, 0xc9, 0x45, 0xad, 0xdd, 0x49, 0xd2, 0xc4, 0x9c, 0x2d, 0xa8, 0x5a, 0xb3, 0x1d, 0xd7,
	0x32, 0xaa, 0x76, 0xbe, 0x53, 0xbd, 0x46, 0x78, 0xf6, 0x68, 0x40, 0xb2, 0x17, 0x22, 0xea, 0x75,
	0x23, 0x3f, 0x39, 0x8d, 0x4f, 0x2e, 0xcd, 0x27, 0x78, 0xfd, 0xc8, 0x13, 0xcf, 0xf6, 0x5c, 0xef,
	0x48, 0x31, 0x47, 0x09, 0x08, 0x03, 0x50, 0xbe, 0xe7, 0x32, 0xfb, 0x58, 0x85, 0x3c, 0xf0, 0xc1,
	0x66, 0x7b, 0x0c, 0x1c, 0x52, 0x31, 0x3f, 0xc6, 0x4f, 0x4a, 0x49, 0xea, 0xea, 0x55, 0x27, 0xf4,
	0x5d, 0x66, 0x53, 0x09, 0x04, 0x99, 0x9f, 0xe3, 0xcf, 0xfe, 0x2f, 0xad, 0xf6, 0x28, 0x73, 0xc1,
	0x51, 0x1e, 0x77, 0x8f, 0x89, 0x61, 0x7e, 0x82, 0xb7, 0x4a, 0x4f, 0x0a, 0xf8, 0x12, 0x6c, 0x39,
	0xf4, 0xa2, 0xa9, 0xea, 0x2f, 0x08, 0xbf, 0xe7, 0x37, 0x3b, 0x51, 0x2b, 0xb5, 0x4f, 0x93, 0xbb,
	0xb2, 0xd6, 0xf0, 0x92, 0x4f, 0x05, 0x70, 0xa9, 0x6c, 0xd7, 0x2b, 0xab, 0x68, 0x05, 0x7f, 0x34,
	0x0e, 0x92, 0x20, 0x1a, 0x8c, 0xe7, 0x65, 0x2c, 0xe1, 0xc5, 0x71, 0x08, 0xdd, 0xa5, 0xdc, 0xf1,
	0x38, 0x31, 0xcc, 0xc7, 0x78, 0x75, 0x1c, 0x20, 0xe0, 0xab, 0x10, 0x02, 0xa9, 0x6c, 0xca, 0x6d,
	0x70, 0xc9, 0x54, 0xf5, 0x0f, 0x84, 0xe7, 0xec, 0xa4, 0x95, 0xc6, 0xad, 0x5e, 0x44, 0xbb, 0x3c,
	0xba, 0x60, 0xad, 0x38, 0x8d, 0x9b, 0x69, 0xd2, 0x31, 0xb7, 0xf0, 0x86, 0xed, 0x71, 0xc9, 0x78,
	0x08, 0x8a, 0x06, 0x8a, 0xc3, 0x91, 0x62, 0x9c, 0x49, 0x46, 0xa5, 0x27, 0x46, 0x32, 0x7e, 0x8c,
	0x57, 0xcb, 0xd1, 0x42, 0x35, 0x82, 0x74, 0xf9, 0xe5, 0x9c, 0x00, 0x29, 0xb4, 0xd0, 0x4f, 0xf1,
	0x66, 0x39, 0x64, 0x0b, 0x8f, 0xab, 0xc0, 0x3e, 0x00, 0x27, 0x74, 0xb5, 0xcc, 0x7f, 0x1b, 0x78,
	0xbe, 0x70, 0x10, 0x7c, 0x17, 0x9d, 0xf4, 0xd2, 0x38, 0x69, 0x05, 0x69, 0x33, 0xed, 0x75, 0x75,
	0x01, 0x77, 0x1d, 0x83, 0xe7, 0x60, 0x87, 0x92, 0xe9, 0xc3, 0x92, 0xca, 0x30, 0x18, 0x29, 0x60,
	0x03, 0xaf, 0x94, 0xa3, 0x22, 0xe4, 0x9c, 0xf1, 0x7d, 0x82, 0xcc, 0x4d, 0xbc, 0x56, 0x8e, 0xd9,
	0x5e, 0xc3, 0x77, 0x41, 0x82, 0x43, 0x0c, 0x73, 0x1d, 0x2f, 0x97, 0x83, 0xb9, 0xaf, 0xc8, 0x94,
	0x96, 0x6d, 0x42, 0xb8, 0xac, 0x45, 0xe0, 0x90, 0xe9, 0x7b, 0xc3, 0xf0, 0x16, 0x77, 0x67, 0x0b,
	0x87, 0x3c, 0x30, 0x6b, 0xb8, 0x3a, 0x29, 0xc1, 0x5c, 0x55, 0x67, 0x20, 0x2b, 0x99, 0x99, 0x5c,
	0x90, 0x64, 0x0d, 0x6d, 0xff, 0x50, 0x92, 0x87, 0xd5, 0xd7, 0x08, 0x7f, 0xe0, 0x47, 0xad, 0x17,
	0x71, 0xeb, 0x25, 0x3d, 0x49, 0xe3, 0xf3, 0x38, 0xbd, 0xd4, 0x2a, 0x47, 0x99, 0xd1, 0x80, 0x3b,
	0x8c, 0xef, 0x2b, 0x6a, 0x4b, 0x76, 0xc8, 0xe4, 0x71, 0x76, 0x1e, 0x46, 0x14, 0x5e, 0xc7, 0xcb,
	0x25, 0x5c, 0xd1, 0x4d, 0x87, 0x20, 0x73, 0x15, 0x5b, 0x65, 0x94, 0xa4, 0x22, 0xd7, 0xf6, 0x29,
	0xde, 0x2c, 0x61, 0x72, 0xc9, 0x0a, 0x93, 0x6b, 0x89, 0xab, 0x3f, 0x21, 0xbc, 0x30, 0xc8, 0xbb,
	0xb0, 0x89, 0x6c, 0x76, 0x5f, 0xe5, 0xb9, 0x0f, 0x45, 0xba, 0x53, 0x41, 0xd2, 0xe0, 0xd9, 0xd8,
	0x02, 0xb6, 0xf0, 0xc6, 0x24, 0x78, 0xb8, 0x8a, 0x4d, 0xbc, 0x36, 0x11, 0x2d, 0x4a, 0xa9, 0xfe,
	0x88, 0xf0, 0xdc, 0x41, 0xdc, 0x4d, 0x93, 0xce, 0x25, 0x9c, 0x47, 0xad, 0x74, 0x2f, 0x3e, 0x4d,
	0xa3, 0x8e, 0xbc, 0x6c, 0x47, 0xfa, 0x75, 0x07, 0x2c, 0x90, 0x9e, 0x38, 0x56, 0x70, 0xa8, 0xe7,
	0x78, 0x8f, 0xb9, 0x12, 0x84, 0x92, 0xc7, 0xfe, 0x68, 0x66, 0x9b, 0x78, 0xad, 0x1c, 0xa5, 0xae,
	0x9b, 0xaf, 0x12, 0x34, 0x39, 0x66, 0x7e, 0x4f, 0xe4, 0xa8, 0x51, 0xfd, 0xd9, 0xc0, 0x58, 0x44,
	0x69, 0x67, 0xd0, 0xe5, 0x45, 0x3c, 0x9f, 0x8d, 0xe7, 0x58, 0x65, 0x46, 0x36, 0x19, 0x57, 0xbe,
	0xf0, 0xf6, 0x05, 0x04, 0x01, 0x41, 0x7a, 0xb2, 0x86, 0x37, 0xb9, 0xc7, 0xf3, 0x41, 0xa7, 0xbb,
	0x6e, 0x7e, 0xc3, 0x86, 0x02, 0x88, 0x61, 0xce, 0xe3, 0xf7, 0x87, 0x31, 0x6d, 0x3d, 0x6d, 0xbc,
	0x29, 0xed, 0xfd, 0xe1, 0x8d, 0x06, 0x7d, 0xce, 0x1a, 0x61, 0x43, 0x51, 0x29, 0xa1, 0xe1, 0xcb,
	0x40, 0x09, 0xa0, 0x5a, 0x79, 0x32, 0xad, 0x1d, 0x36, 0x4c, 0xe6, 0xcf, 0x83, 0x7b, 0x8f, 0x7b,
	0x52, 0x05, 0x20, 0xc9, 0x83, 0xd1, 0x7c, 0x18, 0x97, 0x20, 0x38, 0x75, 0x55, 0x00, 0xe2, 0x10,
	0x84, 0x02, 0x21, 0x3c, 0x41, 0x66, 0xcc, 0x65, 0xfc, 0x68, 0x18, 0x7b, 0xcb, 0x59, 0x0f, 0xab,
	0xbf, 0x23, 0xfc, 0x8e, 0x8c, 0xcf, 0xa2, 0xa4, 0x97, 0x66, 0x0d, 0x7b, 0x84, 0x17, 0x06, 0x59,
	0x8f, 0xeb, 0xd1, 0x12, 0x5e, 0xbc, 0xb7, 0x9b, 0x79, 0x40, 0x49, 0x2f, 0x97, 0x3d, 0x77, 0xfe,
	0x7d, 0x60, 0xe0, 0x27, 0xcd, 0x64, 0x30, 0x31, 0x26, 0x32, 0x79, 0x9c, 0x29, 0xf3, 0x43, 0x3c,
	0x77, 0x8f, 0x39, 0x00, 0x2a, 0xe4, 0x2e, 0x50, 0x49, 0xa6, 0x77, 0x5f, 0xa3, 0xab, 0x1b, 0xab,
	0x72, 0x7d, 0x63, 0x55, 0xde, 0xdc, 0x58, 0xe8, 0xfb, 0xbe, 0x85, 0x7e, 0xed, 0x5b, 0xe8, 0xcf,
	0xbe, 0x85, 0xae, 0xfa, 0x16, 0xfa, 0xab, 0x6f, 0xa1, 0x7f, 0xfa, 0x56, 0xe5, 0x4d, 0xdf, 0x42,
	0x3f, 0xdc, 0x5a, 0x95, 0xab, 0x5b, 0xab, 0x72, 0x7d, 0x6b, 0x55, 0xf0, 0x42, 0x9c, 0xd4, 0xc6,
	0x7e, 0xbf, 0x77, 0xdf, 0x2d, 0x66, 0xca, 0xd7, 0x5f, 0x79, 0x1f, 0x7d, 0xbd, 0xf2, 0x72, 0x08,
	0x8d, 0x93, 0x7b, 0xff, 0x04, 0x5f, 0x64, 0x0f, 0xbf, 0x19, 0xb3, 0xb2, 0x00, 0x68, 0x3b, 0xae,
	0x41, 0x16, 0xeb, 0x70, 0xe7, 0x5f, 0x63, 0xa1, 0x58, 0xaf, 0xd7, 0x69, 0x3b, 0xae, 0xd7, 0xb3,
	0x9d, 0x7a, 0xfd, 0x70, 0xe7, 0x9b, 0x99, 0xec, 0x27, 0xe2, 0xd3, 0xff, 0x02, 0x00, 0x00, 0xff,
	0xff, 0xe2, 0x02, 0x94, 0x10, 0x6c, 0x08, 0x00, 0x00,
}

func (x WorkflowIdReusePolicy) String() string {
	s, ok := WorkflowIdReusePolicy_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x ParentClosePolicy) String() string {
	s, ok := ParentClosePolicy_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x ContinueAsNewInitiator) String() string {
	s, ok := ContinueAsNewInitiator_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x WorkflowExecutionStatus) String() string {
	s, ok := WorkflowExecutionStatus_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x PendingActivityState) String() string {
	s, ok := PendingActivityState_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x PendingWorkflowTaskState) String() string {
	s, ok := PendingWorkflowTaskState_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x HistoryEventFilterType) String() string {
	s, ok := HistoryEventFilterType_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x RetryState) String() string {
	s, ok := RetryState_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x TimeoutType) String() string {
	s, ok := TimeoutType_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
